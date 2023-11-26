import React,{useState, useEffect} from "react";
import '../css/Store.css';
import API from 'api/axios';
import Brand_box from "../components/brand_box.js";
/*console창에 편의점 data의 'id: 1'인것을 확인하고 url endpoint를 아래처럼
불러오는데  계속 API 오류(404 Error)가 나네요..*/
const ConvenienceStoreCategory=()=>{
  const [convenienceStore, setConvenienceStore]=useState([]);
  useEffect(()=>{
    fetchConvenienceStoreData();
  },[]);
  const categoryID=1;
  const fetchConvenienceStoreData=async()=>{
    const endpoint=`/market/categories/${categoryID}/brands`;
    const access_token=localStorage.getItem('access');
    try{
      const response=await API.get(endpoint,{
        headers:{
          Authorization:`Bearer ${access_token}`
        }
      });
      setConvenienceStore(response.data);
      console.log(convenienceStore);

    }catch(e){
      console.log("API 오류: ",e);
    }
  }
    return (
      
        <div>
        <Brand_box category={convenienceStore} title="편의점"/>
        {/*<TitleBanner />
        <hr/>

        <BackbuttonBar title="편의점"/>
        <hr></hr>
      <div>
        <StoreGrid products={ConvenienceStore}/>
      </div> */}

        </div>
    )
}

export default ConvenienceStoreCategory;
