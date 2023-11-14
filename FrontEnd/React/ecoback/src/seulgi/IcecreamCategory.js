import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Icecream from "./jsonFile/icecream.json";
import BackbuttonBar from "components/BackbuttonBar.js";
const IcecreamCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
        {/* <div class="top_line">
        <img
          src={require('../image/arrow-right.png')}
          alt="receipt"
          style={{ width: '30px', height: '30px' }}
        />
        <div class="normal" style={{fontSize: '5vw',margin:'auto 0'}}>아이스크림/빙수</div>
      </div> */}
      <BackbuttonBar title="아이스크림/빙수"/>
      <hr></hr>
      <div>
        <StoreGrid products={Icecream} />
      </div>
        </div>
    )
}

export default IcecreamCategory;