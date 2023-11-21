
import React from "react";

import TitleBanner from "../components/TitleBanner.js";
import IndividualGrid from "../components/individualGrid.js";
import BackbuttonBar from "../components/BackbuttonBar.js";
import '../css/Store.css';
import Product_box from "../components/Product_box";

const ProductsCategory=()=>{
    return (
        <div>
            <Product_box url={'/temp_product.json'} title={'스타벅스'}/>
      <div>
      </div>
        <br/>
        </div>
    )
}

export default ProductsCategory;


{/*
import React from "react";
import individualBox from "./jsonFile/individualBox.json";
import TitleBanner from "../components/TitleBanner.js";
import IndividualGrid from "../components/individualGrid.js";
import BackbuttonBar from "../components/BackbuttonBar.js";
const ProductsCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr />
        <BackbuttonBar title="개별 상품 목록"/>
        <hr />
      <div>
        <IndividualGrid products={individualBox}/>
      </div>

        </div>
    )
}

export default ProductsCategory;
 */}
