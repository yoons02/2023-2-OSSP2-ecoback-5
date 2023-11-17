import React, { useState } from 'react';
import ImageSlider from "../slider/slider"; 
import GaugeBar from "../components/GaugeBar"; //오늘 절약한 컵 개수에 따라 거북이 위치 변화
import '../css/Home.css';
import { Link } from 'react-router-dom';
import user_info from '../minju/json/user_info.json';/*개인 포인트 불러오기 */
import TitleBanner from "../components/TitleBanner.js";
const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const saving_cup = 20000;
  /*위는 이후 barcode api 확정시 id(개수)를 이용하여 불러올 예정*/
  const point = user_info.point;
  return (
    <div>
      <TitleBanner />

      {/* 사이드바 ui 통일 작업하느라 잠시 슬라이더 주석처리 해놓았습니다 */}
      
       <ImageSlider /> 
      <div className="normal" id="normalline">
        <div className="normal">내 잔여 포인트</div>
        <div className="normal">{point} 포인트</div>
      </div>

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

      <hr />

      <div className="normal" style={{ padding: '15px 10px' }}>
        오늘 절약한 일회용품
      </div>

      <div style={{ padding: '10px 0 110px 0' }}>
     {/*  <div style={{ padding: '0 0 0 52%' }}>
          <div className="image-container">
            <img
              src={require('../image/speechbubble.png')}
              alt="receipt"
              style={{ width: '70px', height: '60px', margin: '0' }}
            />
            <div className="image-text">&nbsp;조금만 더...!</div>
          </div>
        </div>*//*말풍선과 거북이 통합하여 하나의 사진으로 변경 */} 
        <div id="turtlebar">
          <img
            src={require('../image/free-icon-juice.png')}
            alt="juice"
            style={{ width:  '9vw', height: 'auto', margin: '0px' }}
          />
           <GaugeBar value={`${saving_cup}`} />
          <img
            src={require('../image/free-icon-paper-cup.png')}
            alt="paper-cup"
            style={{ width: '7.5vw', height: 'auto', margin: '0px' }}
          />
        </div>
        <div className="center-hr">
          <hr className="hr" />
        </div>
        <div className="center-hr">
          <div className="normal">일회용 컵  {saving_cup}개 절약 중</div>
        </div>
      </div>



    </div>
  );
};

export default Home;
