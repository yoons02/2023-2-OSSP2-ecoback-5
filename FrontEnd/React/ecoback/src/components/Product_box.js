import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link, useNavigate } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from "./TitleBanner.js";

const Product_box = ({ url, title }) => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  let screenWidth = window.innerWidth;
  if (screenWidth > 420) {
    screenWidth = 420;
  }
  const fontSize = `${(screenWidth)/25}px`;

  useEffect(() => {
    fetchProductData();
  }, [url]); // Include 'url' in the dependency array to trigger the effect when 'url' changes

  const fetchProductData = async () => {
    try {
      const access_token = localStorage.getItem('access');
      /* 임시적으로 개별 상품 data 목록 id 2번과 편의점 카테고리 연결해놨습니다. */
      const response = await API.get(`market/brands/${url}/products/`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.data) {
        setProduct(response.data);
      } else {
        console.error("API response does not contain data:", response);
      }
    } catch (e) {
      console.log("API 오류: ", e);
      navigate('/');
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
      <div className='title_line_P'>
        {product.map((productData, index) => (
          <div key={index}>
            <Link to={`/store/product/${productData.id}`}>
              <div className='box_categories_P'>
                <img style={{ margin: '0', width: '60%', objectFit: 'cover', height: '60%' }} src={API.defaults.baseURL + productData.product_image} alt={productData.name} />
                <div className='normal' style={{ fontSize: `${fontSize}`, textAlign: 'center', fontWeight: 'normal' }}>{productData.name}</div>
                <div className='normal' style={{ textAlign: 'center' }}>{productData.price}원</div>
              </div>
              <div style={{ marginBottom: '5%' }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_box;
