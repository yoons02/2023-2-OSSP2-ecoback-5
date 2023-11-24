import React from "react";
<<<<<<< HEAD:FrontEnd/React/ecoback/src/pages/CafeCategory.js
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Cafe from "../seulgi/jsonFile/cafe.json";
import BackbuttonBar from "components/BackbuttonBar.js";
=======
import '../css/Store.css';
import Store_box from "../components/store_box.js";


>>>>>>> eb9dffde7b0c58648871e2dd5a80f0a8457bf48d:FrontEnd/React/ecoback/src/seulgi/CafeCategory.js
const CafeCategory=()=>{
    return (
        <div>
          <Store_box url='/cafe.json' title="카페"/>
        {/*<TitleBanner />
        <hr/>
      <BackbuttonBar title="카페"/>
      <hr></hr>
      <div>
        <StoreGrid products={Cafe} />
      </div>*/}
        </div>
    )
}

export default CafeCategory;