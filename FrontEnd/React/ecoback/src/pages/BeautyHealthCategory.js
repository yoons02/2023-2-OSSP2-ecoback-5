/*아직 beautyCategory에 대한 data가 없어서 API 호출 형식으로 수정만 해놨습니다.*/
import React, {useEffect, useState} from "react";
import '../css/Store.css';
import Brand_box from "../components/brand_box";
import API from 'api/axios';
const BeautyHealthCategory=()=>{
  const id=1;
  // const [beauty, setBeauty]=useState([]);
  // useEffect(()=>{
  //   fetchBeautyData();
  // },[])
  // const fetchBeautyData=()=>{
  //   const endpoint="/endpoint";
  //   const access_token=localStorage.getItem('access');
  //   try{
  //     const response=API.get(endpoint,{
  //       headers:{
  //         Authorization:`Bearer ${access_token}`
  //       }
  //     })
  //     setBeauty(response.data);

  //   }catch(e){
  //     console.log("API 오류: ",e);
  //   }
  // }
    return (
        <div>
          <Brand_box category={id} title="뷰티/패션/건강"/>
      {/*
      <TitleBanner />
        <hr/>
      <BackbuttonBar title="뷰티/패션/건강"/>
      <hr></hr>
      <div>
        <StoreGrid products={BeautyHealth} />
      </div>
      */} 
        </div>
    )
}

export default BeautyHealthCategory;