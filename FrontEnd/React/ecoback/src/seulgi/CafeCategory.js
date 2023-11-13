import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Cafe from "./jsonFile/cafe.json";
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
        <div class="normal" style={{fontSize: '5vw',margin:'auto 0'}}>카페</div>
      </div>
      <div>
        <StoreGrid products={Cafe} />
      </div>
        </div>
    )
}

export default CafeCategory;