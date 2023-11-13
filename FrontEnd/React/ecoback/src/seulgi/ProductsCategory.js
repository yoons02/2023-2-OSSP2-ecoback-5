import React from "react";
import individualBox from "./jsonFile/individualBox.json";
import TitleBanner from "../components/TitleBanner.js";
import StoreGrid from "../components/storeGrid.js";
const ProductsCategory=()=>{
    return (
        <div>
        <TitleBanner />
        <hr/>
        <div class="top_line">
        <img
          src={require('../image/arrow-right.png')}
          alt="receipt"
          style={{ width: '30px', height: '30px' }}
        />
        <div class="normal" style={{fontSize: '20px',margin:'auto 0'}}>개별 상품목록</div>
      </div>
      <div>
        <StoreGrid products={individualBox}/>
      </div>

        </div>
    )
}

export default ProductsCategory;