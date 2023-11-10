import React from "react";
import BeautyHealthGrid from "./beautyHealthGrid.js";
import TitleBanner from "../components/TitleBanner.js";
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
        <div class="normal" style={{fontSize: '20px',margin:'auto 0'}}>뷰티/패션/건강</div>
      </div>
      <div>
        <BeautyHealthGrid />
      </div>

        </div>
    )
}

export default BeautyHealthCategory;