import Modal from 'react-modal';
import React, {useState, useEffect} from 'react';
import '../seulgi/popup.css';
import API from 'api/axios';
import PaymentSuccessModal from './paymentSuccess';
  
const BuyingPopup=({isModalOpen,setIsModalOpen, price})=> {

  const [paymentSuccessModalOpen, setPaymentSuccessModalOpen]=useState(false);
  const access_token=localStorage.getItem('access');
  const [userInfo, setUserInfo]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    
    try{
      const response=await API.get('/mypage/get_object/',{
        headers:{
          Authorization: `Bearer ${access_token}`,
        },
      });
      setUserInfo(response.data);
      //setUserInfo({ id: 'HELLO', image: '', name: 'HELLO', point: 2500, created_at: '13434', content: '342', user: '23432' });
      console.log("user 정보: ",userInfo);
    }catch(e){
      console.log("API 오류: ",e);
    }
  }
    const modalStyle = {
      content: {
        borderRadius: "20px",
        aspectRatio: '1 / 1',
        maxHeight: "40vh",
        position: 'fixed',
        width: '100%', // 'Width'를 'width'로 수정
        maxWidth: '300px',
        margin: 0,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
        overlay:{
            backgroundColor:'rgba(0, 0, 0, 0.4)'
        }
      };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    /*상품 구매 후 포인트 업데이트 로직*/
    const updatePoint=async(newPoint)=>{
      try{
        const changePoint=await API.patch('/mypage/get_object/',{
          point:newPoint
        },
        {
          headers:{
            Authorization: `Bearer ${access_token}`
          },
        });
        setUserInfo(changePoint.data);
        console.log("point update success: ",changePoint.data);
        setPaymentSuccessModalOpen(true);

        
      }catch(e){
        console.log("PATCH method 동작 실패: ",e);
      }
      console.log("차감된 포인트: ", userInfo.point);
      handleCloseModal();
    }
  return (
    <div>
      <PaymentSuccessModal isModalOpen={paymentSuccessModalOpen} setIsModalOpen={setPaymentSuccessModalOpen}/>
      <Modal style={modalStyle} isOpen={isModalOpen}>
        <div className="pointViewer">
            <b>{userInfo.name}</b>님의 가용 포인트 <b>{userInfo.point}</b><br/>
            차감포인트 <b style={{color:"red"}}>{price}</b><br/>
            <hr />
            <div id="leftPoint">
            {((userInfo.point-price)>=0)? 
            <p style={{fontSize:"23px"}}>잔여포인트 <b style={{color:"#83D15E"}}>{userInfo.point-price}</b></p>
             : <p style={{fontSize:"23px", color:"red"}}><b>포인트 부족: 구매 불가</b></p>}
            {/* <p style={{fontSize:"5vw"}}>잔여포인트 <b style={{color:"#83D15E"}}>{(userInfo.point-price)>=0? userInfo.point-price : "포인트 부족. 구매 불가!!"}</b></p> */}
            <p id="sentence">
            상품을 구매하시겠습니까?<br/>
            취소하기 버튼을 누르시면 <br/>상품구매가 취소됩니다.</p>
            </div>
        </div>
        <hr />
        <div>
          {(userInfo.point-price)>=0?
          <div><button id="buy" onClick={()=>{updatePoint(userInfo.point-price)}}>구매하기</button>
            <button id="cancel" onClick={()=>{handleCloseModal()}}>취소하기</button></div> 
            :<button id="close" onClick={()=>{handleCloseModal()}}>창닫기</button>}
           
        </div>
      </Modal>
    </div>
  )
}

export default BuyingPopup;