import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Bakery from "./jsonFile/bakery.json";
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

const BakeryCategory=()=>{
    return (
        <div>
          <Store_box url='/bakery.json' title="베이커리"/>
          {/* 
        <TitleBanner />
        <hr/>
      <BackbuttonBar title="베이커리"/>
      <hr></hr>
      <div>
        <StoreGrid products={Bakery} />
      </div>*/}
        </div>
    )
}

export default BakeryCategory;