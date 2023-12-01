// /*웹브라우저 보안 정책상 웹애플리케이션이 사용자 파일 시스템에 직접적으로 접근하여
// 파일을 저장할 수 없다고 함. 대신 사용자에게 캡처된 이미지를 다운로드할 수 있도록
// 유도할 수 있는 기능을 찾아 코드를 추가해놓음.

// ->Refresh버튼:원래 없는건데 사진 캡처하고 사용자가 수동으로 이미지 저장할 수 있게 화면에 띄워놓고
// Refrsh 버튼 누르면 사진 사라지게 일단 임시로 버튼 만들어놓음.
// */

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import Webcam from 'react-webcam';
// import './receiptFilming.css';
// import SendPhotoModal from './sendPhotoModal';
// import API from 'api/axios';

// const videoConstraints = {
//   width: { ideal: window.innerWidth },
//   height:{ideal:window.innerHeight},
//   facingMode: "user",
//   /*전면카메라(PC용): user, 후카메라(모바일용): environment*/
// };

// const Camera = () => {
//   const [isModalOpen, setIsModalOpen]=useState(false);
//   const handleOpenModal=()=>setIsModalOpen(true);
//   const webcamRef = useRef(null);
//   const [url, setUrl] = useState(null);

//   const capturePhoto = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();/*스크린샷 url 저장*/
//     setUrl(imageSrc);

//     // 캡처된 이미지를 다운로드하기 위한 링크 요소를 생성
//     const downloadLink = document.createElement('a');
//     downloadLink.href = imageSrc;
//     downloadLink.download = 'barcode.png'; // 다운로드될 파일의 이름을 지정

//     // 링크를 문서에 추가하고 클릭 이벤트를 발생
//     document.body.appendChild(downloadLink);
//     downloadLink.click();

//     // 링크 요소를 다시 문서에서 제거
//     document.body.removeChild(downloadLink);
//   }, [webcamRef]);

//   const onUserMedia = (e) => {
//     console.log("User Media accessed", e);
//   }
//   const dataURLtoFile = (dataurl, filename) => {
//     let arr = dataurl.split(',');
//     let mime = arr[0].match(/:(.*?);/)[1];
//     let bstr = atob(arr[1]);
//     let n = bstr.length;
//     let u8arr = new Uint8Array(n);

//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     // Blob 대신 File 객체를 생성합니다.
//     return new File([u8arr], filename, { type: mime });
// };

// const sendPhotoServer = async () => {

//     const imageFile = dataURLtoFile(url, 'barcode.png');
//     const formData = new FormData();

//     formData.append('status', 'approved');
//     formData.append('code', '0036000291452');
//     formData.append('image', imageFile);

//     const endpoint="/barcodes/";
//     const access_token=localStorage.getItem('access');
//     console.log("accessToken: ",access_token);
    
//     try{
//       /*post 형식으로 formData 전송*/
//       const response=await API.post(endpoint,formData,{
//         headers:{
//           'Authorization':`Bearer ${access_token}`,
//         }
//       });

//       if(response.status === 200){
//         console.log('Photo uploaded Successfully!');
//       }
//       else{
//         console.log('Fail to Upload Photo.');
//       }
//     }
//     catch(e){
//       console.error('Error: ',e);
//     }
// };


//   // //데이터 URL에서 Blob 객체 생성하는 함수
//   // //Base64 인코딩된 데이터 url를 'Blob' 객체로 변환해 파일 형식으로 서버에 전달.
//   // const dataURLtoBlob=(dataurl)=>{
//   //   let arr=dataurl.split(','),mime=arr[0].match(/:(.*?);/)[1],
//   //   bstr=atob(arr[1]),n=bstr.length, u8arr=new Uint8Array(n);
//   //   while(n--){
//   //     u8arr[n]=bstr.charCodeAt(n);
//   //   }
//   //   return new Blob([u8arr],{type:mime});
//   // }
//   // /*서버로 사진 전송하는 함수*/
//   // const sendPhotoServer = async()=>{
//   //   handleOpenModal();
//   //   const imageBlob=dataURLtoBlob(url);
//   //   const formData=new FormData();
//   //   /*<input name="photo" value={url} />이라고 생각하면 됨. */
//   //   formData.append('status','approved');
//   //   formData.append('code','0036000291452');
//   //   formData.append('image',imageBlob, 'barcode.png');

//   //   const endpoint="/barcodes";
//   //   const access_token=localStorage.getItem('access');
//   //   console.log("accessToken: ",access_token);
    
//   //   try{
//   //     /*post 형식으로 formData 전송*/
//   //     const response=await API.post(endpoint,formData,{
//   //       headers:{
//   //         'Authorization':`Bearer ${access_token}`,
//   //       }
//   //     });

//   //     if(response.status === 200){
//   //       console.log('Photo uploaded Successfully!');
//   //     }
//   //     else{
//   //       console.log('Fail to Upload Photo.');
//   //     }
//   //   }
//   //   catch(e){
//   //     console.error('Error: ',e);
//   //   }

//   // }

//   return (
//     <>
//       <Webcam
//         class="webcam"
//         ref={webcamRef}
//        audio={false}
//         screenshotFormat="image/png"
//         videoConstraints={videoConstraints}
//        onUserMedia={onUserMedia}
//         mirrored={true}
//         width="100%"
//       />

//       <div className="container">
//       <button id="album"><img id="album" src={require("../image/photoAlbum.png")} alt="photoAlbum" /></button>
//       <button id="turtleBtn" onClick={capturePhoto}><img id="turtleBtn" src={require("../image/turtleBtn.png")} alt="captureBtn" /></button>
//       <button id="refresh" onClick={() => { setUrl(null) }}><img id="refreshBtn"src={require("../image/refreshBtn.png")}/></button>
//       </div>
    

//       {url && (
//         <div id="screenShot">
//           <img src={url} alt='ScreenShot'/>
//           <button id="sendPhotoBtn" onClick={sendPhotoServer}>전송하기</button>
//         </div>
//       )}
     
//     <SendPhotoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
//     </>
//   );
// }

// export default Camera;

/*웹브라우저 보안 정책상 웹애플리케이션이 사용자 파일 시스템에 직접적으로 접근하여
파일을 저장할 수 없다고 함. 대신 사용자에게 캡처된 이미지를 다운로드할 수 있도록
유도할 수 있는 기능을 찾아 코드를 추가해놓음.

->Refresh버튼:사진 캡처하고 사용자가 수동으로 이미지 저장할 수 있게 화면에 띄워놓고
Refrsh 버튼 누르면 사진 사라지게*/

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import './receiptFilming.css';
import SendPhotoModal from './sendPhotoModal';
import API from 'api/axios';

const videoConstraints = {
  width: { ideal: window.innerWidth },
  height:{ideal:window.innerHeight},
  facingMode: "environment",
  /*전면카메라(PC용): user, 후카메라(모바일용): environment*/
};

const Camera = () => {
  const [isModalOpen, setIsModalOpen]=useState(false);
  const handleOpenModal=()=>setIsModalOpen(true);
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();/*스크린샷 url 저장*/
    setUrl(imageSrc);
    console.log(url);

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

  //데이터 URL에서 Blob 객체 생성하는 함수
  //Base64 인코딩된 데이터 url를 'Blob' 객체로 변환해 파일 형식으로 서버에 전달.
  const dataURLtoBlob=(dataurl)=>{
    let arr=dataurl.split(','),mime=arr[0].match(/:(.*?);/)[1],
    bstr=atob(arr[1]),n=bstr.length, u8arr=new Uint8Array(n);
    while(n--){
      u8arr[n]=bstr.charCodeAt(n);
    }
    return new Blob([u8arr],{type:mime});
  }
  /*서버로 사진 전송하는 함수*/
  const sendPhotoServer = async()=>{
    handleOpenModal();
    const imageBlob=dataURLtoBlob(url);
    const formData=new FormData();
    /*<input name="photo" value={url} />이라고 생각하면 됨. */
    formData.append('status','approved');
    formData.append('code','0036000291452');
    formData.append('image',imageBlob, 'barcode.png');

    const endpoint="/barcodes/";
    const access_token=localStorage.getItem('access');
    
    try{
      /*post 형식으로 formData 전송*/
      const response=await API.post(endpoint,formData,{
        headers:{
          'Authorization':`Bearer ${access_token}`,
          'Content-Type': 'multipart/form-data'/*formData 형식으로 file 전달*/
        }
      });

      if(response.status === 200){
        console.log('Photo uploaded Successfully!');
      }
      else{
        console.log('Fail to Upload Photo.');
      }
    }
    catch(e){
      console.error('Error: ',e);
    }

    //<SendPhotoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

  }

  return (
    <>
      <Webcam
        class="webcam"
        ref={webcamRef}
       audio={false}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
       onUserMedia={onUserMedia}
        mirrored={false}
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
          <button id="sendPhotoBtn" onClick={sendPhotoServer}>전송하기</button>
        </div>
      )}
     
    <SendPhotoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default Camera;