import Modal from 'react-modal';
import React, {useState, useEffect} from 'react';
import '../seulgi/popup.css';
import API from 'api/axios';
  
const BuyingPopup=({isModalOpen,setIsModalOpen, price})=> {
  const [userInfo, setUserInfo]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const access_token=localStorage.getItem('access');
    try{
      const response=await API.get('mypage/get_object/',{
        headers:{
          Authorization: `Bearer ${access_token}`,
        },
      });
      setUserInfo(response.data);
      console.log("user 정보: ",userInfo);
    }catch(e){
      console.log("API 오류: ",e);
    }
  }
    const modalStyle = {
        content: {
            alignItems:"center",
            borderRadius: "2vw",
            maxHeight:"60vw",
            position:'absolute',
            top:"25%",
            left:"13%",

        },
        overlay:{
            backgroundColor:'rgba(0, 0, 0, 0.4)'
        }
      };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    const buyProduct=()=>{
      
    }
  return (
    <div>
      <Modal style={modalStyle} isOpen={isModalOpen}>
        <div className="pointViewer">
            <b>홍길동</b>님의 가용 포인트 <b>{userInfo.point}</b><br/>
            차감포인트 <b style={{color:"red"}}>6000</b><br/>
            <hr />
            <div id="leftPoint">
            {(userInfo.point-price)>=0? 
            <p style={{fontSize:"5vw"}}>잔여포인트 <b style={{color:"#83D15E"}}>{userInfo.point-price}</b></p>
             : <p style={{fontSize:"5vw", color:"red"}}><b>포인트 부족: 구매 불가</b></p>}
            {/* <p style={{fontSize:"5vw"}}>잔여포인트 <b style={{color:"#83D15E"}}>{(userInfo.point-price)>=0? userInfo.point-price : "포인트 부족. 구매 불가!!"}</b></p> */}
            <p id="sentence">
            상품을 구매하시겠습니까?<br/>
            취소하기 버튼을 누르면 상품구매가 취소됩니다.</p>
            </div>
        </div>
        <hr />
        <div>
          {(userInfo.price-price)>=0?
          <div><button id="buy" onClick={buyProduct()}>구매하기</button>
            <button id="cancel" onClick={()=>{handleCloseModal()}}>취소하기</button></div> 
            :<button id="close" onClick={()=>{handleCloseModal()}}>창닫기</button>}
           
        </div>
      </Modal>
    </div>
  )
}

export default BuyingPopup;