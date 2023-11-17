import React from "react";
import BeautyHealth from "./jsonFile/beautyHealth.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from '../components/storeGrid.js';
const BeautyHealthCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
        <div class="top_line">
        <img
          src={require('../image/arrow-right.png')}
          alt="receipt"
          style={{ width: '30px', height: '30px' }}
        />
        <div class="normal" style={{fontSize: '5vw',margin:'auto 0'}}>뷰티/패션/건강</div>
      </div>
      <div>
        <StoreGrid products={BeautyHealth} />
      </div>

        </div>
    )
}

export default BeautyHealthCategory;