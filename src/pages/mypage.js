import BadgeGrid from '../seulgi/myBadge.js';
import '../seulgi/mypage.css'
import TitleBanner from '../components/TitleBanner.js';
//import Backbutton from 'kitae/backbutton.js';

import {Link} from 'react-router-dom';

const MyPage=()=>{
    return (
        <div className="full_container" style={{backgroundColor:"#F9F9F9",paddingBottom:"15px", minHeight:"100vh"}}>
        <div>
            <TitleBanner />
            <hr />
            <div className="profileContainer">
                <div id="username">홍길동님의 프로필</div>
                <div className="faceImage" style={{marginTop:'5%', padding: 'auto'}}>
                    <img id="faceImage" src={require('../image/userProfile.png')} alt="faceImg" />
                    <p style={{fontSize:"16px"}}><b>2023년 10월 1일부터 함께하는 중</b></p>

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