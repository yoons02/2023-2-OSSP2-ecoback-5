import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Giftcard from "./jsonFile/giftcard.json";
import BackbuttonBar from "components/BackbuttonBar.js";
const GiftcardCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
      <BackbuttonBar title="기프트카드/상품권"/>
      <hr></hr>
      <div>
        <StoreGrid products={Giftcard} />
      </div>
        </div>
    )
}

export default GiftcardCategory;