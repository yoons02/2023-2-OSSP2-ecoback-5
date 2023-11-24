import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import registerbutton from '../image/register.png';
import axios from 'axios';
import '../css/Register.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 아이디, 이메일, 비밀번호, 비밀번호 확인 값을 사용하여 회원가입 로직을 구현하세요.
    try {
    const response = await axios.post('http://52.79.233.106:8000/accounts/', {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    });

    if (response.status === 200) {
      // 회원가입 성공
      // 필요에 따라 사용자에게 메시지를 표시하거나 다른 페이지로 리디렉션할 수 있습니다.
      navigate('/login');  // 로그인 페이지로 이동
    
    } else {
      // 회원가입 실패
      // 서버에서 반환한 오류 메시지를 사용자에게 표시할 수 있습니다.
    }
  } catch (error) {
    console.error('회원가입 요청 중 오류가 발생했습니다:', error);
  }
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
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디를 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="email">이메일</label>
            <br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력하세요" className="ip" required />
          </div>
          
          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="password">비밀번호</label>
            <br/>
            <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="비밀번호를 입력하세요" className="ip" required />
          </div>

          <br/>
          <br></br>

          <div className="input-container">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <br/>
            <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="비밀번호를 다시 입력하세요" className="ip" required />
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