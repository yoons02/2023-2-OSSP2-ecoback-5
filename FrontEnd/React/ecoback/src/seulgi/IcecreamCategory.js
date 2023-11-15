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
        
      <BackbuttonBar title="아이스크림/빙수"/>
      <hr></hr>
      <div>
        <StoreGrid products={Icecream} />
      </div>
        </div>
    )
}

export default IcecreamCategory;