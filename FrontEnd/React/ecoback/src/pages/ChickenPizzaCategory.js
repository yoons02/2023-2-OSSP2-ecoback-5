import React from "react";
import TitleBanner from "../components/TitleBanner.js";
import ChickenPizza from "../seulgi/jsonFile/chickenPizza.json";
import StoreGrid from "../components/storeGrid.js";
import BackbuttonBar from "components/BackbuttonBar.js";
const ChickenPizzaCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr></hr>
       
        <BackbuttonBar title="치킨/피자"/>
        <hr></hr>
      <div>
        <StoreGrid products={ChickenPizza} />
      </div>

        </div>
    )
}

export default ChickenPizzaCategory;