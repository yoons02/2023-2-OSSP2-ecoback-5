import React from "react";

import '../css/Store.css';
import Brand_box from "../components/brand_box.js";

const GiftcardCategory=()=>{
  const id=1;
    return (
        <div>
          <Brand_box url={id} title="기프트카드/상품권"/>
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