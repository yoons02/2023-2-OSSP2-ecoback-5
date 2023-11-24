import React from "react";
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