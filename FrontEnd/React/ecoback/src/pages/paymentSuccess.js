import Modal from 'react-modal';
import React from 'react';
import '../seulgi/sendPhotoModal.css';

const PaymentSuccessModal=({isModalOpen, setIsModalOpen})=> {
    const modalStyle = {
        content: {
          borderRadius: "20px",
          aspectRatio: '1 / 1',
          maxHeight: "40vh",
          position: 'fixed',
          width: '100%',
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
    return (
        <div>
          <Modal style={modalStyle} isOpen={isModalOpen}>
          <div className="xbutton">
          <button id="xbutton" onClick={()=>{handleCloseModal()}}>X</button>
          </div>
          <div className="middle">
            <img style={{width: "50%"}}src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740&t=st=1701356185~exp=1701356785~hmac=8a924dfccef73c6f358e328c09853e251da311964d75089dc3375510ad0c8671" alt="barcode"/>
            <div className="text"><b>상품 구매가 완료되었습니다.</b></div>
          </div>
          </Modal>
        </div>
      )
}

export default PaymentSuccessModal;