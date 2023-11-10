import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import registerbutton from '../image/register.png';

// import '../css/Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 아이디, 이메일, 비밀번호, 비밀번호 확인 값을 사용하여 회원가입 로직을 구현하세요.
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
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요" className="ip" required />
          </div>
          <br/>
          <br></br>
          <div className="input-container">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <br/>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호를 다시 입력하세요" className="ip" required />
          </div>
          <br/>
          <br></br>
          <Link to="/Login"><img src={registerbutton}></img></Link>
        </form>
      </center>
    </html>
  );
};

export default Register;