import '../css/Store.css';
import Store_box from "../components/store_box";
import React from 'react';
const Store = () => {
    const storeCategory='market/categories/';
    return(
      <div className="full_container">
        <Store_box  url={storeCategory} title="포인트 상점" />
      </div>
    );
  };
  
  export default Store;