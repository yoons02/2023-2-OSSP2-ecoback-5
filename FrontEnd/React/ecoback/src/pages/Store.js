// import '../css/Store.css';
// import Store_box from "../components/store_box.js";

// const Store = () => {
//     return(
//       <div className="full_container">
//         <Store_box  url='/productCategories.json' title="포인트 상점" />
//       </div>
//     );
//   };
  
//   export default Store;

import '../css/Store.css';
import Store_box from "../components/store_box copy";
import API from "api/axios";
import React, {useState, useEffect} from 'react';
const Store = () => {
  const [storeCategory, setStoreCategory]=useState([]);

  useEffect(()=>{
    fetchStoreData();
  },[]);
  
   const fetchStoreData=async()=>{
    const endpoint="market/categories/";
    const access_token=localStorage.getItem('access');
    try{
      const response=await API.get(endpoint,{
        headers:{
          Authorization: `Bearer ${access_token}`
        }
      });
      setStoreCategory(response.data);
      console.log(storeCategory);
    }catch(e){
      console.error("API 오류: ",e);
    }
    
   }

    return(
      <div className="full_container">
        <Store_box  category={storeCategory} title="포인트 상점" />
      </div>
    );
  };
  
  export default Store;