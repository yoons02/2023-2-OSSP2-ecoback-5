import React,{useState, useEffect} from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box.js";
/*console창에 편의점 data의 'id: 1'인것을 확인하고 url endpoint를 아래처럼
불러오는데  계속 API 오류(404 Error)가 나네요..*/
const ConvenienceStoreCategory=()=>{
const id='1';
    return (
      
        <div>
        <Brand_box url={id} title="편의점"/>
        </div>
    )
}

export default ConvenienceStoreCategory;
