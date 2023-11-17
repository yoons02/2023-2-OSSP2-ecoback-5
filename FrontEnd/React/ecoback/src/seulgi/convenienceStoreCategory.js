import React from "react";
import ConvenienceStore from "./jsonFile/convenienceStore.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from "../components/storeGrid.js";
const ConvenienceStoreCategory=()=>{
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
        <div class="normal" style={{fontSize: '20px',margin:'auto 0'}}>편의점</div>
      </div>
      <div>
        <StoreGrid products={ConvenienceStore}/>
      </div>

        </div>
    )
}

export default ConvenienceStoreCategory;
