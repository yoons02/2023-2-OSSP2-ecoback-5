import React,{useState} from 'react';
import '../css/Product.css';
import TitleBanner from '../components/TitleBanner';
import DolceLatte from "../image/dolcelatte.png";
import Check from "../image/check.png";
import BuyingPopup from '../seulgi/BuyingPopup';
import BackbuttonBar from 'components/BackbuttonBar';
const Product=()=>{
    const [isModalOpen, setIsModalOpen]=useState(false);
    const handleOpenModal=()=>setIsModalOpen(true);
    return(
        <div>
            <TitleBanner />
            <hr />
            <BackbuttonBar title="상품 구매 페이지"/>
            <hr />
            <div className="productBox">
                <div className="Item">
                    <img id="itemImg" src={DolceLatte} alt="돌체 콜드 브루 T" />
                </div>
                <div style={{fontSize:"5vw"}}><b>돌체 콜드 브루 T</b></div>
                <div className="priceTag">
                    <div id="oneline">
                        <div id="resell">리셀 상품</div>
                        <img src={Check} alt="check" id="check" />
                    </div>
                    <div id="class" style={{fontSize:"5vw"}}><b>6,000원</b></div>
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
