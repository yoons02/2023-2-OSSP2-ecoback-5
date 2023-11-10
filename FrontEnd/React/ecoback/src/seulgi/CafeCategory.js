import React from "react";
import CafeGrid from "./CafeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
const CafeCategory=()=>{
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
        <div class="normal" style={{fontSize: '6vw',margin:'auto 0'}}>카페</div>
      </div>
      <div>
        <CafeGrid />
      </div>
        </div>
    )
}

export default CafeCategory;