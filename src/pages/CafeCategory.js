import React from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box";


const CafeCategory=()=>{
  const id=1;
    return (
        <div>
          <Brand_box url={id} title="카페"/>
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