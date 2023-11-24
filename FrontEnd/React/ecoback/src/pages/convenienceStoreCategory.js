import React from "react";
<<<<<<< HEAD:FrontEnd/React/ecoback/src/pages/convenienceStoreCategory.js
import ConvenienceStore from "../seulgi/jsonFile/convenienceStore.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from "../components/storeGrid.js";
import BackbuttonBar from "components/BackbuttonBar.js";
=======
import '../css/Store.css';
import Store_box from "../components/store_box.js";

>>>>>>> eb9dffde7b0c58648871e2dd5a80f0a8457bf48d:FrontEnd/React/ecoback/src/seulgi/convenienceStoreCategory.js
const ConvenienceStoreCategory=()=>{
    return (
      
        <div>
        <Store_box url='/convenienceStore.json' title="편의점"/>
        {/*<TitleBanner />
        <hr/>

        <BackbuttonBar title="편의점"/>
        <hr></hr>
      <div>
        <StoreGrid products={ConvenienceStore}/>
      </div> */}

        </div>
    )
}

export default ConvenienceStoreCategory;
