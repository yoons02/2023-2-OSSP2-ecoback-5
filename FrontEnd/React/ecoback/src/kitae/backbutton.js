import React from 'react';
import { useNavigate } from 'react-router-dom';
import backpagebutton from '../image/backbutton.png'; // 로고 이미지 경로


const Backbutton = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <img src={backpagebutton} onClick={onClickBtn} alt='backbutton' style={{width: '30px', height: '30px'}}></img>
  );
};

export default Backbutton;