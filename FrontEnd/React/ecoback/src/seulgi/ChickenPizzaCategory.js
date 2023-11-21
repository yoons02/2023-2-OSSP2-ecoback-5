import React from "react";
import TitleBanner from "../components/TitleBanner.js";
import ChickenPizza from "./jsonFile/chickenPizza.json";
import StoreGrid from "../components/storeGrid.js";
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";
const ChickenPizzaCategory=()=>{
    return (
        <div>
          <Store_box url='/chickenPizza.json' title="치킨/피자"/>
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