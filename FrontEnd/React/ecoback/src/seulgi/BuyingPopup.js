import Modal from 'react-modal';
import React from 'react';
import './popup.css';
  
const BuyingPopup=({isModalOpen,setIsModalOpen})=> {
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
  return (
    <div>
      <Modal style={modalStyle} isOpen={isModalOpen}>
        <div className="pointViewer">
            <b>홍길동</b>님의 가용 포인트 <b>23640</b><br/>
            차감포인트 <b style={{color:"red"}}>6000</b><br/>
            <hr />
            <div id="leftPoint">
            <p style={{fontSize:"5vw"}}>잔여포인트 <b style={{color:"#83D15E"}}>{23640-6000}</b></p>
            <p id="sentence">
            상품을 구매하시겠습니까?<br/>
            취소하기 버튼을 누르면 상품구매가 취소됩니다.</p>
            </div>
        </div>
        <hr />
        <div clasName="btnContainer">
            <button id="buy">구매하기</button>
            <button id="cancel" onClick={()=>{handleCloseModal()}}>취소하기</button>
        </div>
      </Modal>
    </div>
  )
}

export default BuyingPopup;