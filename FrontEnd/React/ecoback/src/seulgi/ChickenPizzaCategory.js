import React from "react";
import TitleBanner from "../components/TitleBanner.js";
import ChickenPizza from "./jsonFile/chickenPizza.json";
import StoreGrid from "../components/storeGrid.js";
import BackbuttonBar from "components/BackbuttonBar.js";
const ChickenPizzaCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr></hr>
        {/* <div class="top_line">
        <img
          src={require('../image/arrow-right.png')}
          alt="receipt"
          style={{ width: '30px', height: '30px' }}
        />
        <div class="normal" style={{fontSize: '5vw',margin:'auto 0'}}>편의점</div>
      </div> */}
        <BackbuttonBar title="치킨/피자"/>
        <hr></hr>
      <div>
        <StoreGrid products={ChickenPizza} />
      </div>

        </div>
    )
}

export default ChickenPizzaCategory;