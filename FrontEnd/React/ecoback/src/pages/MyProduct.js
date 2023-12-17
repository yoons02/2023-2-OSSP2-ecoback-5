import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link, useNavigate } from 'react-router-dom';
import StorePointDisappear from 'components/StorePointDisappear';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner.js';


const Store = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem('access');
    const url="/mypage/my_products/";
    try {
      const response = await API.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error('API 오류', error);
      navigate('/');
    }
  };

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr />
      <BackbuttonBar title="구매한 상품" />
      <hr />
      <div className="title_line">
        {categories.map((category, index) => (
          <div key={index}>
             <Link to={`./${category.id}`}>   
              <div className="box_categories_m">
                <img
                  style={{ width: '70%', maxHeight:'80%', objectFit: 'cover'}}
                  src={API.defaults.baseURL + category.product_image}
                  alt={category.name}
                />
              </div>
            </Link>
            <div className="normal" style={{ textAlign: 'center' }}>
             {category.name}
            </div>
          </div>
        ))}

      </div>
     
    </div>
  );
};

export default Store;
