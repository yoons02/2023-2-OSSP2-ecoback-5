import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API from "api/axios";

const ImageSlider = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const endpoint="mypage/get_object/"
    const access_token=localStorage.getItem('access');
    try{
      const response=await API.get(endpoint,{
        headers:{
          Authorization: `Bearer ${access_token}`
        }
      });
      setDatas(response.data);
    } catch (error) {
      console.error("API 오류", error);
    }
  };
  return (
    <div className="normal" id="normalline">
      <div>내 잔여 포인트</div>
      <div>{datas.point} 포인트</div>
    </div>
  );
};

export default ImageSlider;
