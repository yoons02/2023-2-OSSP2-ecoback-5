import React from "react";

import '../css/Store.css';
import Store_box from "../components/store_box.js";


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