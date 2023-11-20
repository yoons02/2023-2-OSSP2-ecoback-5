import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Store_box = () => {
  const [category, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/productCategories.json');
      setEvents(response.data); // Use response.data instead of data
    } catch (error) {
      console.error('API 오류', error);
    }
  };

  return (
    <div className='title_line'>
      {category.map((categoryData, index) => (
        <div key={index}>
          <Link to={'/' + categoryData.name}>
            <div className='box_categories_m'>
              <img style={{ width: '18vw' }} src={require('../image/' + categoryData.image)} alt={categoryData.name} />
            </div>
          </Link>
          <div className='normal' style={{ textAlign: 'center' }}>{categoryData.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Store_box;
