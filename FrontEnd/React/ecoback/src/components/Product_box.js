/*sotre_box copy.js 파일 만들어서 백엔드 API와 연동 해놨습니다.
-> API Store.js 페이지에서 불러와서 store_box 컴포넌트에 props 전달
*/
import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from "./TitleBanner.js";
const Store_box = ({url, title}) => {
  const [category, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setEvents(response.data); 
    } catch (error) {
      console.error('API 오류', error);
    }
  };

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr/>
      <BackbuttonBar title={title}/>
      <hr></hr>
    <div className='title_line_P'>
      {category.map((categoryData, index) => (
        <div key={index}>
          <Link to={'./' + categoryData.id}>
            <div className='box_categories_P'>
              <img style={{ width: '60%' }} src={require('../image/categories/' + categoryData.product_image)} alt={categoryData.name} />
            </div>
        <div style={{ marginBottom: '15%' }}>
          <div className='normal' style={{ textAlign: 'center', fontWeight:'normal'}}>{categoryData.name}</div>
          <div className='normal' style={{ textAlign: 'center' }}>{categoryData.price}원</div>
        </div>
          </Link>
        </div>
      ))}
    </div>
     
    </div>
  );
};

export default Store_box;
