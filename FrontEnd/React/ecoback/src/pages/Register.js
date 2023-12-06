import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import registerbutton from '../image/register.png';
import axios from 'axios';
import css from '../css/Register.css';
import { useNavigate } from 'react-router-dom';
import API from 'api/axios';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      const userData = {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
     };
   
  
    API.post('/accounts/', userData)
            .then((response) => {
                if (response.status === 201) {
                  alert("회원가입에 성공했습니다.");
                    navigate('/login');
                }
              
            })
            .catch((error) => {
                if (error.response) {
                  const errorData = error.response.data;
                  let errorMessage = '';

                  if (errorData.non_field_errors) {
                    errorMessage = errorData.non_field_errors[0];
                  } else if (errorData.username) {
                    errorMessage = errorData.username[0];
                  } else if (errorData.password1) {
                    errorMessage = errorData.password1[0];
                  }

                  if (errorMessage.includes('이미')) {
                    alert('이미 존재하는 사용자입니다. 다른 사용자명을 입력해주세요.');
                  } else if (errorMessage.includes('짧습니다')) {
                    alert('비밀번호가 8글자보다 짧습니다. 더욱 긴 비밀번호를 입력해주세요.');
                  } 
                  else if (errorMessage.includes('일상적인')) {
                    alert('비밀번호가 너무 간단합니다. 더욱 복잡한 비밀번호를 입력해주세요.');
                  }
                  else {
                    alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
                  }
                } else {
                  console.log(error);
                }
              });
  };

  return (
    <html className="full_container">
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
            <input type="text" id="css.username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디를 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="email">이메일</label>
            <br/>
            <input type="email" id="css.email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력하세요" className="ip" required />
          </div>
          
          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="password1">비밀번호</label>
            <br/>
            <input type="password" id="css.password1" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="비밀번호를 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="password2">비밀번호 확인</label>
            <br/>
            <input type="password" id="css.password2" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="비밀번호를 다시 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

        
          <button className="register-button" type="submit">
            <img src={registerbutton} alt="Register Button" />
          </button>

        </form>
      </center>
    </html>
  );
};

export default Register;  