import React, { useState } from 'react';
import ImageSlider from "../slider/slider"; 
import Sidebar from '../kitae/sidebar';
import '../css/Home.css';
import {Link} from 'react-router-dom';
const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  return (
    <div> 
    <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
      {/* 아직 마이페이지 이동버튼이 없는것같아서 Eco$Back 텍스트 누르면 
      마이페이지 들어가도록 임시적으로 링크 걸어두었습니다. */}
    {/* <Link to="/mypage"> */}
      <div className="title">Eco$Back</div>
    {/* </Link> */}
      
      {/* {isSidebarVisible && <Sidebar />} */}
      
        {/* 사이드바를 구현해보고 있는데 아직 미완성입니다! 외부영역 클릭시 사라지게만들어야함 */}
        <Sidebar/>
      
    </div>
  

    <ImageSlider/>
    <div className="normal" id="normalline">
      <div className="normal">내 잔여 포인트</div>
      <div className="normal">1,234 포인트</div>
    </div>

    <div id="boxline" className="normal">
      <div className="box">
      <Link to="/receiptfilming">
        <img
          src={require('../image/receipticon.png')} // Modify image path
          alt="receipt"
          style={{ width: '45px', height: '36px' }}
        />
      </Link>
        <div>영수증 촬영</div>
      </div>
      <a href="./store" className="box">
        <img
          src={require('../image/storeicon.png')} // Modify image path
          alt="store"
          style={{ width: '36px', height: '36px' }}
          
        />
        <div>포인트 상점</div>
      </a>
    </div>

    <hr />

    <div className="normal"style={{ padding: '15px 10px' }}>
      오늘 절약한 일회용품
    </div>

    <div style={{ padding: '10px 0 110px 0' }}>
      <div style={{ padding: '0 0 0 52%' }}>
        <div className="image-container">
          <img
            src={require('../image/speechbubble.png')}
            alt="receipt"
            style={{ width: '70px', height: '60px', margin:'0' }}
        />
        <div className="image-text">&nbsp;조금만 더...!</div>
        </div>
      </div>
      <div id="turtlebar"> {/* Modify class name */}
        <img
          src={require('../image/free-icon-juice.png')} // Modify image path
          alt="juice"
          style={{ width: '40px', height: '40px', margin: '0px' }}
        />
        <img
          src={require('../image/free-icon-turtle.png')} // Modify image path
          alt="turtle"
          style={{ width: '50px', height: '30px', margin: '0px' }}
        />
        <img
          src={require('../image/free-icon-paper-cup.png')} // Modify image path
          alt="paper-cup"
          style={{ width: '36px', height: '36px', margin: '0px' }}
        />
      </div>
      <div className="center-hr">
        <hr className="hr" />
      </div>
      <div className="center-hr">
        <div class="normal">일회용 컵 123,456개 절약 중</div>
      </div>
    </div>

    </div>
      );
};

export default Home;