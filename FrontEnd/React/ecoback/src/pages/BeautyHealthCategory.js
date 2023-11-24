import React from "react";
import BeautyHealth from "../seulgi/jsonFile/beautyHealth.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from '../components/storeGrid.js';
import BackbuttonBar from "components/BackbuttonBar.js";
const BeautyHealthCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
      <BackbuttonBar title="뷰티/패션/건강"/>
      <hr></hr>
      <div>
        <StoreGrid products={BeautyHealth} />
      </div>

        </div>
    )
}

export default BeautyHealthCategory;