import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';

const StorePointDisappear = () => {
  const [categories, setCategories] = useState([]);
  const url = 'barcodes/last_barcode/';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem('access');

    try {
      const response = await API.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error('API 오류', error);
    }
  };

  // 날짜 형식 변환을 위한 함수
  const formatDate = (dateString) => {
    if (!dateString || isNaN(Date.parse(dateString))) {
      return "소멸 예정인 포인트가 없습니다.";
    }
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 패딩
    const day = date.getDate().toString().padStart(2, '0');
    return `포인트가 ${year}년 ${month}월 ${day}일에 소멸될 예정이에요.`;
  };

  return (
    <div className="full_container">
      <div className="normal" style={{fontWeight: '500', textAlign: 'center', fontSize: '90%', margin: '10%' }}>
        {formatDate(categories['extinction period'])}
      </div>
    </div>
  );
};

export default StorePointDisappear;
