// Manager.js
import React, { useState, useRef } from "react";
import API from "api/axios";
import BackbuttonBar from '../../components/BackbuttonBar';
import TitleBanner from '../../components/TitleBanner.js';
import '../../css/Home.css';
import '../../css/Add/add.css';
import { Link } from 'react-router-dom';

const Manager = () => {

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr />
      <BackbuttonBar title="관리자 페이지" />
      <hr />
      <div className="normal" id="align">
      <Link to="./category_add">
        <div className="box">
        <div>카테고리 추가</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>카테고리 수정</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>브랜드 추가</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>브랜드 수정</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>상품 추가</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>상품 수정</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>이벤트 추가</div>
        </div>
      </Link>
      <Link to="./category_add">
        <div className="box">
        <div>이벤트 수정</div>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Manager;
