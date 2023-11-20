import React, { useState } from 'react';
import ImageSlider from "../slider/slider"; 
import GaugeBar from "../components/GaugeBar_whole"; //오늘 절약한 컵 개수에 따라 거북이 위치 변화
import '../css/Home.css';
import { Link } from 'react-router-dom';
import user_info from '../minju/json/user_info.json';/*개인 포인트 불러오기 */
import TitleBanner from "../components/TitleBanner.js";


const Home = () => {
  const point = user_info.point;
  return (
    <div>
      <TitleBanner />
     
      <ImageSlider />
      {/*포인트 표시 부분 */}
      <div className="normal" id="normalline">
        <div className="normal">내 잔여 포인트</div>
        <div className="normal">{point} 포인트</div>
      </div>
      {/*이동 버튼*/}
      <div id="boxline" className="normal">
      <Link to="/receiptfilming">
        <div className="box">
            <img
              src={require('../image/receipticon.png')}
              alt="receipt"
              style={{ width: '10vw', height: 'auto' }}
            />

          <div>영수증 촬영</div>
        </div>
      </Link>
      <Link to="/store">
        <div className="box">
          <img
            src={require('../image/storeicon.png')}
            alt="store"
            style={{ width: '8vw', height: 'auto' }}
          />
          <div>포인트 상점</div>
        </div>
      </Link>
      </div>
      <hr />{/*게이지바 부분 컴포넌트로 변경 */}
           <GaugeBar/>
    </div>
  );
};

export default Home;
