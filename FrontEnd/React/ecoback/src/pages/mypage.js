import BadgeGrid from '../seulgi/myBadge.js';
import '../seulgi/mypage.css'
import TitleBanner from '../components/TitleBanner.js';
import React, {useState, useEffect} from 'react';
import API from "api/axios"
import {Link} from 'react-router-dom';

const MyPage=()=>{
    const [userInfo, setUserInfo]=useState([]);
    useEffect(()=>{
        getUserData();
    },[])

    const access_token=localStorage.getItem('access');
    const endpoint='/mypage/get_object/';
    
    const getUserData=async()=>{
        try{
            const getUserInfo=await API.get(endpoint, {
                headers:{
                    Authorization:`Bearer ${access_token}`
                }
            })
            console.log("getUserInfo:", getUserInfo.data);
            setUserInfo(getUserInfo.data);

        }catch(e){
            console.log("get-API 오류: ",e);
        }
    }
    const formDate=(dateString)=>{
        const date=new Date(dateString);
        const year=date.getFullYear();
        const month=date.getMonth()+1;
        const day=date.getDate();
        return `${year}년 ${month}월 ${day}일`
    }
    return (
        <div className="full_container" style={{backgroundColor:"#F9F9F9",paddingBottom:"15px", minHeight:"100vh"}}>
        <div>
            <TitleBanner />
            <hr />
            <div className="profileContainer">
                <div id="username">{userInfo.name}님의 프로필</div>
                <div className="faceImage" style={{marginTop:'5%', padding: 'auto'}}>
                    <img id="faceImage" src={userInfo.image} alt="faceImg" />
                    <p style={{fontSize:"16px"}}><b>{formDate(userInfo.created_at)}부터 함께하는 중</b></p>

                    <Link to="/editprofilepage">
                    <button id="editProfile">프로필 편집</button>
                    </Link>
                </div>
            </div>
            <hr />
            <div className="badgeCollection">
                <div id='badgeText'>내가 모은 배지</div>
                <div id="badgeCount">6/12</div>
                <BadgeGrid />
            </div>
        </div>
        </div>
    )
}

export default MyPage;