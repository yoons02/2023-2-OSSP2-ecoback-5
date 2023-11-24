import React from "react";
import individualBox from "../seulgi/jsonFile/individualBox.json";
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
