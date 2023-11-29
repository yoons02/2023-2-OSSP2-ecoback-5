/*웹브라우저 보안 정책상 웹애플리케이션이 사용자 파일 시스템에 직접적으로 접근하여
파일을 저장할 수 없다고 함. 대신 사용자에게 캡처된 이미지를 다운로드할 수 있도록
유도할 수 있는 기능을 찾아 코드를 추가해놓음.

->Refresh버튼:원래 없는건데 사진 캡처하고 사용자가 수동으로 이미지 저장할 수 있게 화면에 띄워놓고
Refrsh 버튼 누르면 사진 사라지게 일단 임시로 버튼 만들어놓음.
*/

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import './receiptFilming.css';
import SendPhotoModal from './sendPhotoModal';
import API from 'api/axios';

const videoConstraints = {
  width: { ideal: window.innerWidth },
  height:{ideal:window.innerHeight},
  facingMode: "user",
  /*전면카메라(PC용): user, 후카메라(모바일용): environment*/
};

const Camera = () => {
  const access_token=localStorage.getItem('access');
  const [isModalOpen, setIsModalOpen]=useState(false);
  const handleOpenModal=()=>setIsModalOpen(true);
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();/*스크린샷 url 저장*/
    setUrl(imageSrc);

    // 캡처된 이미지를 다운로드하기 위한 링크 요소를 생성
    const downloadLink = document.createElement('a');
    downloadLink.href = imageSrc;
    downloadLink.download = 'barcode.png'; // 다운로드될 파일의 이름을 지정

    // 링크를 문서에 추가하고 클릭 이벤트를 발생
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // 링크 요소를 다시 문서에서 제거
    document.body.removeChild(downloadLink);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log("User Media accessed", e);
  }
  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    // Blob 대신 File 객체를 생성
    return new File([u8arr], filename, { type: mime });

    //캡처된 사진을 서버에 보내는 함수

};

// 이 함수는 캡처된 사진을 서버에 보내는 함수입니다.
const sendPhoto = async () => {
  // FormData 객체를 생성합니다.
  const formData = new FormData();

  // 캡처된 이미지를 File 객체로 변환합니다.
  // 이 예제에서는 'url' 상태가 이미지의 dataURL을 포함하고 있다고 가정합니다.
  const file = dataURLtoFile(url, 'barcode.png');

  // formData에 필요한 키와 값을 추가합니다.
  formData.append('status', 'approved');
  formData.append('code', '0036000291452');
  formData.append('image', file);

  try {
    // 서버에 POST 요청 보내기
    const response = await API.post('/barcodes/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${access_token}`
      }
    });

    // 요청 성공
    console.log('Image uploaded successfully', response.data);
  } catch (error) {
    // 요청 실패
    console.error('Error uploading image', error);
  }
};







  return (
    <>
      <Webcam
        class="webcam"
        ref={webcamRef}
       audio={false}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
       onUserMedia={onUserMedia}
        mirrored={true}
        width="100%"
      />

      <div className="container">
      <button id="album"><img id="album" src={require("../image/photoAlbum.png")} alt="photoAlbum" /></button>
      <button id="turtleBtn" onClick={capturePhoto}><img id="turtleBtn" src={require("../image/turtleBtn.png")} alt="captureBtn" /></button>
      <button id="refresh" onClick={() => { setUrl(null) }}><img id="refreshBtn"src={require("../image/refreshBtn.png")}/></button>
      </div>
    

      {url && (
        <div id="screenShot">
          <img src={url} alt='ScreenShot'/>
          <button id="sendPhotoBtn" onClick={sendPhoto}>Photo Submit</button>
        </div>
      )}
     
    <SendPhotoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default Camera;
