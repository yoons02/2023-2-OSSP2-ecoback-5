import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Cafe from "../seulgi/jsonFile/cafe.json";
import BackbuttonBar from "components/BackbuttonBar.js";
const CafeCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
      <BackbuttonBar title="카페"/>
      <hr></hr>
      <div>
        <StoreGrid products={Cafe} />
      </div>
        </div>
    )
}

export default CafeCategory;