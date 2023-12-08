import React from "react";
import '../css/Store.css';
import Product_box from "../components/Product_box";
import { useLocation } from 'react-router-dom';

const Product_temp=()=>{
    const location = useLocation();
    const brandName = new URLSearchParams(location.search).get('brandName')||'';
    const Id = location.pathname.split('/').pop(); 
    return (
        <div>
            <Product_box url={Id} title={brandName || "상품 목록"}/>
      <div>
      </div>
        <br/>
        </div>
    )
}

export default Product_temp;

