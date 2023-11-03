import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import loginbutton from '../image/loginbutton.png';
import googleloginbutton from '../image/googleloginbutton.png';

import '../css/Login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직
    console.log(`ID: ${id}, Password: ${password}`);
  };

  return (
    <html>
        <br></br><br></br><br></br><br></br><br></br>
        <center>
            <div id="logo">
                <img src={logo} alt="logo" />
                <br/>
                플라스틱으로 힘들어 하고 있는 바다거북이를 지켜주세요!
                <br/>
                <br/>
            </div>
        </center>
        <p class="ip">아이디</p>
        <center>
            <div id="id_input">
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}  placeholder="아이디를 입력하세요" />
            </div>
            <br></br>
        </center>
        <p class="ip">비밀번호</p>
        <center>
            <div id="password_input">  
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value) }  placeholder="비밀번호를 입력하세요" />           
            </div>
        </center>
        <br></br>
        <br></br>

        <center>
            <a href="./Home">
                <img src={loginbutton} alt="loginbutton"/>
            </a>
        </center>
        <p class="ask_register">계정이 없으신가요? 가입하기 &nbsp;&nbsp;</p> 
        {/* 가입하기 누르면 가입창 나오게 제작예정 */}
        <center>
            <div class="hr-sect">또는</div>
            <img src={googleloginbutton} alt="googleloginbutton"/>
        </center>
    </html>
  );
}

export default Login;