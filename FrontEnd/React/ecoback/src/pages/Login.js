import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import loginbutton from '../image/loginbutton.png';
import '../css/Login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직
    console.log(`ID: ${id}, Password: ${password}`);
  };

  return (
    <center>
        <div id="logo">
        <img src={logo} alt="logo" />
        <br/>
        플라스틱으로 힘들어 하고 있는 바다거북이를 지켜주세요!
        <br/>
        <br/>
        <div>
            <label id="id_input">
            아이디<br/>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
        </div>
        <div>
            <label id="password_input">
            비밀번호
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
        </div>
        {/* <button onClick={handleLogin}>로그인하기</button> */}
        <a href="./Home">
            <img src={loginbutton} alt="loginbutton"/>
        </a>
        <hr/>
        </div>
    </center>
  );
}

export default Login;