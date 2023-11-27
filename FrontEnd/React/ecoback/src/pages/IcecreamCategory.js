import React from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box.js";

const IcecreamCategory=()=>{
  const id=1;
    return (
        <div>
          <Brand_box url={id} title="아이스크림/빙수"/>
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