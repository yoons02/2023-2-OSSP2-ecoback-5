import React from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box";

const BakeryCategory=()=>{
  const id=1;
    return (
        <div>
          <Brand_box url={id} title="베이커리"/>
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