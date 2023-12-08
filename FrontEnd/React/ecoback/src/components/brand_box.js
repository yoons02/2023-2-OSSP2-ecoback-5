import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner.js';
import StorePointDisappear from 'components/StorePointDisappear';

const Brand_box = ({ url, title }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem('access');

    try {
      const response = await API.get('market/categories/'+url+'/brands/', {
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
      <BackbuttonBar title={title} />
      <hr />
      <div className="title_line">
        {categories.map((category, index) => (
          <div key={index}>
            <Link to={`/store/brand/${category.id}?brandName=${encodeURIComponent(category.brand_name)}`}>
              <div className="box_categories_m">
                <img
                  style={{ width: '70%' }}
                  src={API.defaults.baseURL + category.brand_image}
                  alt={category.brand_name}
                />
              </div>
            </Link>
            <div className="normal" style={{ textAlign: 'center' }}>
             {category.brand_name}
            </div>
          </div>
        ))}
        
      </div>
      <StorePointDisappear/>
    </div>
  );
};

export default Brand_box;
