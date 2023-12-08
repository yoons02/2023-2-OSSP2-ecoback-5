import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link } from 'react-router-dom';
import StorePointDisappear from 'components/StorePointDisappear';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from '../components/TitleBanner.js';


const Store_box = ({ url, title }) => {
  const [categories, setCategories] = useState([]);

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
            <Link to={`./${category.id}`}>
              <div className="box_categories_m">
                <img
                  style={{ width: '70%' }}
                  src={API.defaults.baseURL + category.image}
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

      <StorePointDisappear/>
     
    </div>
  );
};

export default Store_box;
