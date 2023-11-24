import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import registerbutton from '../image/register.png';
import axios from 'axios';
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';
import API from 'api/axios';
import checkUserInfo from 'kitae/checkUserInfo';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (checkUserInfo(username, email, password1, password2)) 
        return;

    // 아이디, 이메일, 비밀번호, 비밀번호 확인 값을 사용하여 회원가입 로직을 구현하세요.
      const userData = {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
     };
   
  
    API.post('/accounts/', userData)
            .then((response) => {
                if (response.status === 201) {
                    navigate('/login');
                }
            })
            .catch((error) => console.log(error.response));
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
        <form onSubmit={handleSubmit}>

          <div className="input-container">
            <label htmlFor="username">아이디</label>
            <br/>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디를 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="email">이메일</label>
            <br/>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력하세요" className="ip" required />
          </div>
          
          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="password1">비밀번호</label>
            <br/>
            <input type="password" id="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="비밀번호를 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="password2">비밀번호 확인</label>
            <br/>
            <input type="password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="비밀번호를 다시 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          {/* <Link to="/Login"><img src={registerbutton}></img></Link>
           */}

          <button className="register-button" type="submit">
            <img src={registerbutton} alt="Register Button" />
          </button>

        </form>
      </center>
    </html>
  );
};

export default Register;  