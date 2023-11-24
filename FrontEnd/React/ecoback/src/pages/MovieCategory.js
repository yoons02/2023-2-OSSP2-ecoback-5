import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Movie from "../seulgi/jsonFile/movie.json";
import BackbuttonBar from "components/BackbuttonBar.js";
import '../css/Store.css';
import Store_box from "../components/store_box.js";

const MovieCategory=()=>{
    return (
        <div>
          <Store_box url='/movie.json' title="영화"/>
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