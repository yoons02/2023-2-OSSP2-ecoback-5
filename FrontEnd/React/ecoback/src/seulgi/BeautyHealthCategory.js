import React from "react";
import BeautyHealth from "./jsonFile/beautyHealth.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from '../components/storeGrid.js';
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

const BeautyHealthCategory=()=>{
    return (
        <div>
          <Store_box url='/beautyHealth.json' title="뷰티/패션/건강"/>
      {/*
      <TitleBanner />
        <hr/>
      <BackbuttonBar title="뷰티/패션/건강"/>
      <hr></hr>
      <div>
        <StoreGrid products={BeautyHealth} />
      </div>
      */} 
        </div>
    )
}

export default BeautyHealthCategory;