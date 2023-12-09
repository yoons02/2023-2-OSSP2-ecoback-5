import badges from '../seulgi/jsonFile/badges.json';
import '../seulgi/mypage.css';
import API from 'api/axios';
import React, {useEffect, useState,  useContext} from 'react';
import {BadgeCountContext} from '../seulgi/BadgeCountContext';

//뱃지 아이콘 생성
function Badge({badge}){
    const containerStyle = {
        width: '80%', 
        margin:'5%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

    };
    const {badgeCnt, setBadgeCnt}=useContext(BadgeCountContext);
    const [barcodeCounts, setBarcodeCounts] = useState({ count: 0 });
    useEffect(() => {
        if (badge.minCount < barcodeCounts.count) {
            setBadgeCnt(prevCnt => prevCnt + 1);
        }
    }, [barcodeCounts.count]);


    const access_token=localStorage.getItem('access');
    const endpoint='/barcodes/count/';
    
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
            setBarcodeCounts({ count: response.data.count });
            console.log(response.data);
            

        }catch(e){
            console.log("API 오류: ",e);
        }
    }
    console.log("barcodeCounts: ", barcodeCounts.count);
    
    // useEffect(() => {
    //     // barcodeCounts가 변경될 때마다 실행됩니다.
    //     if (badge.minCount < barcodeCounts.count) {
    //       // 조건이 참일 경우 badgeCount를 1 증가시킵니다.
    //       setBadgeCount(prev => prev + 1);
    //     }
    //   }, [barcodeCounts, badge.minCount, setBadgeCount]); // 의존성 배열에 필요한 값들을 넣어주세요.
    
    

    return (
        <div style={containerStyle}>
            <div id="hexagon">
                {console.log("minCount: ",badge.minCount)}
                
            {(badge.minCount<barcodeCounts.count)? <img id="badgeImg" src={require(`../image/${badge.img}`)} alt={badge.name} /> : <img id="badgeImg" src={require('../image/badge_unlock.png')} alt={badge.name} />}
         
            
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