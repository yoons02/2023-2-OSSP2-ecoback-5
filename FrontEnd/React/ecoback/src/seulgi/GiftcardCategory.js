import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Giftcard from "./jsonFile/giftcard.json";
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

const GiftcardCategory=()=>{
    return (
        <div>
          <Store_box url='/giftcard.json' title="기프트카드/상품권"/>
        {/*
        <TitleBanner />
        <hr/>
      <BackbuttonBar title="기프트카드/상품권"/>
      <hr></hr>
      <div>
        <StoreGrid products={Giftcard} />
      </div> */}
        </div>
    )
}

export default GiftcardCategory;