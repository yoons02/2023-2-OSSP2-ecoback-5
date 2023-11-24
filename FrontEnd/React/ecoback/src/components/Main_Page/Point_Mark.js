import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const ImageSlider = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/user_info.json');
      // Use response.data directly, no need for response.json()
      const data = response.data;
      setDatas(data);
    } catch (error) {
      console.error("API 오류", error);
    }
  };
  const point=datas.point;

  return (
    <div className="normal" id="normalline">
      <div>내 잔여 포인트</div>
      <div>{point} 포인트</div>
    </div>
  );
};

export default ImageSlider;
