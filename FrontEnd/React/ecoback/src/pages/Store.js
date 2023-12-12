import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link } from 'react-router-dom';
import StorePointDisappear from 'components/StorePointDisappear';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner.js';

let screenWidth = window.innerWidth;
if (screenWidth > 420) {
  screenWidth = 420;
}
const fontSize = `${(screenWidth)/26}px`;
const Store = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem('access');
    const url="market/categories/";
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

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr />
      <BackbuttonBar title="포인트 상점" />
      <hr />
      <div className="title_line">
        {categories.map((category, index) => (
          <div key={index}>
             <Link to={`./${category.id}?categoryName=${encodeURIComponent(category.name)}`}>   
              <div className="box_categories_m">
                <img
                  style={{margin:'0', width: '75%' , objectFit: 'cover'}}
                  src={API.defaults.baseURL + category.image}
                  alt={category.name}
                />
              </div>
            </Link>
            <div className="normal_nb" style={{ fontSize: `${fontSize}`, textAlign: 'center' }}>
             {category.name}
            </div>
          </div>
        ))}

      </div>

      <StorePointDisappear/>
     
    </div>
  );
};

export default Store;
