import React from "react";
import '../css/Store.css';
import Product_box from "../components/Product_box";

const Product_temp=()=>{
    return (
        <div>
            <Product_box url={'/temp_product.json'} title={'스타벅스'}/>
      <div>
      </div>
        <br/>
        </div>
    )
}

export default Product_temp;
