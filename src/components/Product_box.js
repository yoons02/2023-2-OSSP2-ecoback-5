/*store_box copy.js 파일 만들어서 백엔드 API와 연동 해놨습니다.
-> API Store.js 페이지에서 불러와서 store_box 컴포넌트에 props 전달
*/
import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link } from 'react-router-dom';
import BackbuttonBar from 'components/BackbuttonBar';
import TitleBanner from "./TitleBanner.js";
const Product_box = ({url, title}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData=async()=>{
    const access_token=localStorage.getItem('access');
    try{
      /*임시적으로 개별 상품 data 목록 id 2번과 편의점 카테고리 연결해놨습니다.*/
      const response=await API.get(`market/brands/${url}/products/`,{
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setProduct(response.data);
    }catch(e){
      console.log("API 오류: ",e);
    }
  }

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr/>
      <BackbuttonBar title={title}/>
      <hr></hr>
    <div className='title_line_P'>
      {product.map((productData, index) => (
        <div key={index}>
          <Link to={'/product1'}>
            <div className='box_categories_P'>
              <img style={{ width: '60%' }} src={API.defaults.baseURL + productData.product_image} alt={productData.name} />
            </div>
        <div style={{ marginBottom: '15%' }}>
          <div className='normal' style={{ textAlign: 'center', fontWeight:'normal'}}>{productData.name}</div>
          <div className='normal' style={{ textAlign: 'center' }}>{productData.price}원</div>
        </div>
          </Link>
        </div>
      ))}
    </div>
     
    </div>
  );
};

export default Product_box;
