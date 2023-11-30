import badges from '../seulgi/jsonFile/badges.json';
import '../seulgi/mypage.css';
import API from 'api/axios';
import React, {useEffect, useState} from 'react';
//뱃지 아이콘 생성
function Badge({badge}){
    const containerStyle = {
        width: '80%', 
        margin:'5%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

    };

    const access_token=localStorage.getItem('access');
    const endpoint='/barcodes/count/';
    const [barcodeCounts, setBarcodeCounts]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    /*각 배지별 획득 조건이 아직 정해지지 않아서 바코드 객체 count 정보를 우선 가져와서 임시적으로 설정해놨습니다.*/
    const fetchData=async()=>{
        try{
            const response=await API.get(endpoint,{
                headers:{
                    Authorization: `Bearer ${access_token}`,
                }
            })
            setBarcodeCounts(response.data);
            console.log(response.data);
            

        }catch(e){
            console.log("API 오류: ",e);
        }
    }
    console.log("barcodeCounts: ", barcodeCounts.count);
    return (
        <div style={containerStyle}>
            <div id="hexagon">
            {(barcodeCounts.count>10)? <img id="badgeImg" src={require(`../image/${badge.img}`)} alt={badge.name} />: <img id="badgeImg" src={require('../image/badge_unlock.png')} alt={badge.name} />}
         
            
            </div>
            
            <p id="badgeName">{badge.name}</p>
        </div>
    );
}

//map함수로 badges 순회하며 뱃지그리드 생성
function BadgeGrid(){
    return (
        <div className="badgeBox">
            {
                badges.map(badge=>{
                    return <Badge key={badge.id} badge={badge} />
                })
            }
        </div>
    )
}

export default BadgeGrid;