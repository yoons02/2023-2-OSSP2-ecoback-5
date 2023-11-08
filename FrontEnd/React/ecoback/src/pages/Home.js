import React, { useState } from 'react';
import ImageSlider from "../slider/slider"; 
import GaugeBar from "../components/GaugeBar"; // GaugeBar 컴포넌트를 import
import Sidebar from '../kitae/sidebar';
import '../css/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const saving_cup = 123456;
  const point=1234; 
  return (
    <div>
      <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
        {/* 아직 마이페이지 이동버튼이 없는 것 같아서 Eco$Back 텍스트 누르면
        마이페이지 들어가도록 임시적으로 링크 걸어두었습니다. */}
        <div className="title">Eco$Back</div>
        <Sidebar />
      </div>
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
        </div>*/} 
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
