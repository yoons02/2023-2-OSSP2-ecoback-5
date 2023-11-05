import React from "react";
import CafeGrid from "./CafeGrid.js";

const CafeCategory=()=>{
    return (
        <div>
        <div className="normal" id="normalline" style={{ padding: '5px 7px' }}>
        <div className="title">Eco$Back</div>
        <div id="menubar_array"> 
          <line/><line/><line/>
        </div>
        </div>
        <hr/>
        <div class="top_line">
        <img
          src={require('../image/arrow-right.png')}
          alt="receipt"
          style={{ width: '30px', height: '30px' }}
        />
        <div class="normal" style={{fontSize: '20px',margin:'auto 0'}}>카페</div>
      </div>
      <div>
        <CafeGrid />
      </div>

        </div>
    )
}

export default CafeCategory;