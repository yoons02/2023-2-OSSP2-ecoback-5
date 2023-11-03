import BadgeGrid from './myBadge.js';
import './mypage.css'
const MyPage=()=>{
    return (
        <div style={{backgroundColor:"#F9F9F9"}}>
            <div className="normal" style={{ padding: '15px' }}>
                <div className="menuContainer">
                <span className="title">Eco$Back</span>
                <span id="menubar_array"> 
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </span>
                </div>
            </div>
            <hr />
            <div className="profileContainer">
                <div id="username">홍길동님의 프로필</div>
                <div className="faceImage" style={{padding: "30px 30px 30px 30px"}}>
                    <img id="faceImage" src={require('../image/userProfile.png')} alt="faceImg" />
                    <p id="period">2023년 10월 1일부터 함께하는 중</p>
                    <button id="editProfile">프로필 편집</button>
                </div>
            </div>
            <hr />
            <div className="badgeCollection" style={{padding: "30px 30px 30px 30px"}}>
                <div id='badgeText'>내가 모은 배지</div>
                <div id="badgeCount">6/12</div>
                <BadgeGrid />
            </div>
        </div>
    )
}

export default MyPage;