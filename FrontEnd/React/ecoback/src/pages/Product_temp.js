import React from "react";

import TitleBanner from "../components/TitleBanner.js";
import IndividualGrid from "../components/individualGrid.js";
import BackbuttonBar from "../components/BackbuttonBar.js";
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
