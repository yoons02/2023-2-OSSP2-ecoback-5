import React from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box.js";
const ChickenPizzaCategory=()=>{
  const id=1;
    return (
        <div>
          <Brand_box url={id} title="치킨/피자"/>
          {/*
          <TitleBanner />
          <hr></hr>
       
          <BackbuttonBar title="치킨/피자"/>
          <hr></hr>
          <div>
            <StoreGrid products={ChickenPizza} />
          </div>
          */}
        </div>
    )
}

export default ChickenPizzaCategory;