import Modal from 'react-modal';
import React from 'react';
import './sendPhotoModal.css';

const SendPhotoModal=({isModalOpen, setIsModalOpen})=> {
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
        <div class='full_container'>
          <Modal  ariaHideApp={false}  style={modalStyle} isOpen={isModalOpen}>
          <div className="xbutton">
          <button id="xbutton" onClick={()=>{handleCloseModal()}}>X</button>
          </div>
          <div className="middle">
            <img style={{width: "40vw"}}src="https://img.freepik.com/free-psd/barcode-illustration-isolated_23-2150584094.jpg?size=626&ext=jpg" alt="barcode"/>
            <div className="text"><b>바코드 사진이 전송되었습니다.</b></div>
          </div>
          </Modal>
        </div>
      )
}

export default SendPhotoModal;