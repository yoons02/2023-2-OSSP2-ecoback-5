import GaugeBar from "./GaugeBar";
import '../../css/Home.css';
import React, { useState, useEffect } from "react";
import API from "api/axios";

const GaugeBar_whole = () => {
     const [datas, setCount] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const endpoint="barcodes/count/"
    const access_token=localStorage.getItem('access');
    try{
      const response=await API.get(endpoint,{
        headers:{
          Authorization: `Bearer ${access_token}`
        }
      });
      setCount(response.data);
    } catch (error) {
      console.error("API 오류", error);
    }
  };
    const value=datas.count;
  return (
    <div>
      <div className="normal" style={{ padding: '15px 10px' }}>
        오늘 절약한 일회용품
      </div>
      
      <div style={{ padding: '10px 0 110px 0' }}>
        <div id="turtlebar">
          <img
            src={require('../../image/free-icon-juice.png')}
            alt="juice"
            style={{ width: '33%', height: 'auto', margin: '0px' }}
          />
          <GaugeBar value={value} />
          <img
            src={require('../../image/free-icon-paper-cup.png')}
            alt="paper-cup"
            style={{ width: '40%', height: 'auto', margin: '0px' }}
          />
        </div>
        <div className="center-hr">
          <hr className="hr" />
        </div>
        <div className="center-hr">
          <div className="normal">일회용 컵 {value}개 절약 중</div>
        </div>
      </div>
    </div>
  );
};

export default GaugeBar_whole;
