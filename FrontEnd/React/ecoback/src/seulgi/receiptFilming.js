import './receiptFilming.css'
import Webcam from "react-webcam";
import Camera from './Camera.js'
import TitleBanner from "../components/TitleBanner.js"
import BackbuttonBar from 'components/BackbuttonBar';
import React, { useState, useEffect } from 'react';
import '../css/Store.css';
import API from 'api/axios';
import { Link, useNavigate } from 'react-router-dom';



const WebcamComponent = () => <Webcam />;
const ReceiptFilming=()=>{
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const access_token = localStorage.getItem('access');
      const url="/mypage/my_products/";
      try {
        const response = await API.get(url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error('API 오류', error);
        navigate('/');
      }
    };
    return (
    <div className="full_container">
        <div class="filmingPage" >
            <TitleBanner />
            <hr />
            <BackbuttonBar title="영수증 촬영"/>
            <div id="camera">
                <Camera />
            </div>
        </div>
    </div>
    );};

export default ReceiptFilming;