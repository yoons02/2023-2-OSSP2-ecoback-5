import React from "react";
import StoreGrid from "../components/storeGrid.js";
import TitleBanner from "../components/TitleBanner.js";
import Movie from "./jsonFile/movie.json";
import BackbuttonBar from "components/BackbuttonBar.js";
const MovieCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
        {/* <div class="top_line">
        <img
          src={require('../image/arrow-right.png')}
          alt="receipt"
          style={{ width: '30px', height: '30px' }}
        />
        <div class="normal" style={{fontSize: '5vw',margin:'auto 0'}}>아이스크림/빙수</div>
      </div> */}
      <BackbuttonBar title="영화"/>
      <hr></hr>
      <div>
        <StoreGrid products={Movie} />
      </div>
        </div>
    )
}

export default MovieCategory;