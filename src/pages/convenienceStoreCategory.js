import React,{useState, useEffect} from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box.js";

const ConvenienceStoreCategory=()=>{
const id='1';
    return (
      
        <div>
        <Brand_box url={id} title="편의점"/>
        </div>
    )
}

export default ConvenienceStoreCategory;
