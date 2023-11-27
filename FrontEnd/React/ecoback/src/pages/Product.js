import React,{useState, useEffect} from 'react';
import '../css/Product.css';
import TitleBanner from '../components/TitleBanner';
import DolceLatte from "../image/dolcelatte.png";
import Check from "../image/check.png";
import BuyingPopup from './BuyingPopup';
import BackbuttonBar from 'components/BackbuttonBar';
import API from "api/axios";
const Product=()=>{
    const[product, setProduct] = useState([]);
    const id=2;
    useEffect(()=>{
        fetchProductData();
    },[]);

    const fetchProductData=async()=>{
        const access_token=localStorage.getItem('access');
        try{
          /*임시적으로 개별 상품 data 목록 id 2번과 편의점 카테고리 연결해놨습니다.*/
          const response=await API.get(`market/products/${id}/`,{
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });
          setProduct(response.data);
        }catch(e){
          console.log("API 오류: ",e);
        }
      }


    const [isModalOpen, setIsModalOpen]=useState(false);
    const handleOpenModal=()=>setIsModalOpen(true);
    return(
        <div>
            <div>
        <TitleBanner />
      </div>
      <hr />
      <BackbuttonBar title="개별 상품 페이지" />
      <hr />
            <div className="productBox">
                <div className="Item">
                    <img id="itemImg" src={API.defaults.baseURL + product.product_image} alt={product.name} />
                </div>
                <div style={{fontSize:"5vw"}}><b>{product.name}</b></div>
                <div className="priceTag">
                    <div id="oneline">
                        <div id="resell">리셀 상품</div>
                        <img src={Check} alt="check" id="check" />
                    </div>
                    <div id="class" style={{fontSize:"5vw"}}><b>{product.price} 원</b></div>
                </div>
            </div>
            <div className="btnBox">
                <button id="buyBtn" onClick={()=>handleOpenModal()}><b style={{fontSize:"4vw"}}>구매하기</b></button>
                <BuyingPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>

        </div>
    )
}
export default Product;
