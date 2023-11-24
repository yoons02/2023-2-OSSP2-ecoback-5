import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Icecream from "../seulgi/jsonFile/icecream.json";
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

const IcecreamCategory=()=>{
    return (
        <div>
          <Store_box url='/icecream.json' title="아이스크림/빙수"/>
       {/* <TitleBanner />
        <hr/>
        
      <BackbuttonBar title="아이스크림/빙수"/>
      <hr></hr>
      <div>
        <StoreGrid products={Icecream} />
      </div> */}
        </div>
    )
}

export default IcecreamCategory;