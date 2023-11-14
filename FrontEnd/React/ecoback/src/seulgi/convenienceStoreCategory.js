import React from "react";
import ConvenienceStore from "./jsonFile/convenienceStore.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from "../components/storeGrid.js";
import BackbuttonBar from "components/BackbuttonBar.js";
const ConvenienceStoreCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>

        <BackbuttonBar title="편의점"/>
        <hr></hr>
      <div>
        <StoreGrid products={ConvenienceStore}/>
      </div>

        </div>
    )
}

export default ConvenienceStoreCategory;
