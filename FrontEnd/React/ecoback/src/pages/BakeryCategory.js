import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
<<<<<<< HEAD:FrontEnd/React/ecoback/src/pages/BakeryCategory.js
import Bakery from "../seulgi/jsonFile/bakery.json";
import BackbuttonBar from "../components/BackbuttonBar.js";
=======
import Bakery from "./jsonFile/bakery.json";
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

>>>>>>> eb9dffde7b0c58648871e2dd5a80f0a8457bf48d:FrontEnd/React/ecoback/src/seulgi/BakeryCategory.js
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