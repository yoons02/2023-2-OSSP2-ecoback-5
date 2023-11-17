import React from 'react';
import TitleBanner from '../components/TitleBanner';
import '../css/EditProfile.css';
const EditProfile=()=>{
    return (
       <div>
        <TitleBanner />
        <hr />
        <div className="profileContainer">
                <div id="username">홍길동님의 프로필</div>
                <div className="faceImage" style={{padding: "5vw"}}>
                    <img id="faceImage" src={require('../image/userProfile.png')} alt="faceImg" />
                    <p style={{fontSize:"3vw"}}><b>2023년 10월 1일부터 함께하는 중</b></p>
                    <button id="editProfile">사진 변경</button>
                </div>
            </div>
            <hr />
            <div className="inputBox">
                <form id="submitForm" action="" method="POST">
                    <input type="text" name="lastName" placeholder="성(Last name)"/><br />
                    <input type="text" name="firstName" placeholder="이름(First name)"/><br />
                    <input type="number" name="phone" placeholder="휴대전화(Phone number)"/><br />
                    <input type="email" name="email" placeholder="이메일(Email address)"/><br />
                    <select name="gender" id="gender">
                        <option>남성</option>
                        <option>여성</option>
                    </select><br />
                    <div id="btnBox">
                    <button id="submitBtn">프로필 편집</button>
                    </div>
                </form>
            </div>
       </div>
    )
}
export default EditProfile;