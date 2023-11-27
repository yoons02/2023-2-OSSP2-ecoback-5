import React from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box";

const MovieCategory=()=>{
  const id=1;
    return (
        <div>
          <Brand_box url={id} title="영화"/>
        {/* 
        <TitleBanner />
        <hr/>
      <BackbuttonBar title="영화"/>
      <hr></hr>
      <div>
        <StoreGrid products={Movie} />
      </div>*/}
        </div>
    )
}

export default MovieCategory;