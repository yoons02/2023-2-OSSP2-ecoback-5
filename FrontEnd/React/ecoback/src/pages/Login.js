import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import loginbutton from '../image/loginbutton.png';
// import googleloginbutton from '../image/googleloginbutton.png';
import GoogleLoginButton from 'kitae/GoogleLogin';
import { Link } from 'react-router-dom';

import '../css/Login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  const response = await fetch('https://your-api-url.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      password: password
    })
  });

  if (response.ok) {
    const data = await response.json();
    console.log('로그인 성공:', data);
  } else {
    console.log('로그인 실패:', response.status);
  }
};

  return (
    <html>
        <center>
            <div id="logo">
                <img src={logo} alt="logo" />
                <br/>
                플라스틱으로 힘들어 하고 있는 바다거북이를 지켜주세요!
                <br/>
                <br/>
            </div>
        </center>
 
        <center>
            <div class="input-container">
                <label for="username">아이디</label>
                <br></br>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}  placeholder="아이디를 입력하세요" class="ip" />
            </div>
            <br></br>
            <br></br>

        </center>
        <center>
            <div class="input-container">  
                <label for="password">비밀번호</label>
                <br></br>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value) }  placeholder="비밀번호를 입력하세요"class="ip" />           
            </div>
        </center>
        <br></br>
        <br></br>
        <Link to="/register" ><p class="ask_register">계정이 없으신가요? 가입하기 &nbsp;&nbsp;</p></Link>
        {/* 가입하기 누르면 가입창 나오게 제작예정 */}
        <center>
            <a href="./Home">
                <img class="imagebutton" onClick={handleLogin} id="loginbutton" src={loginbutton} alt="loginbutton"/>
              {/* 링크 태그로 수정예정 */}           
            </a>
            
        </center>
        <center>
            <div class="hr-sect">또는</div>
            {/* <img class="imagebutton" id="googleloginbutton" src={googleloginbutton} alt="googleloginbutton"/> */}
            <GoogleLoginButton />
        </center>
    </html>
  );
}

export default Login;