import React from "react";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

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
