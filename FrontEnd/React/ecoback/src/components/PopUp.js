import React, { useState } from 'react';
import Modal from 'react-modal';


function PopUp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      {/* 모달 팝업 나오게 하는 버튼 추후 디자인 */}
      {/* 임시로 만든거라 수정하셔도 됩니다 */}
      <button onClick={()=> setModalIsOpen(true)}>Modal Open</button>
	  <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      	여기에 팝업창 내용 적기
      </Modal>
    </>
  )
}  

export default PopUp;