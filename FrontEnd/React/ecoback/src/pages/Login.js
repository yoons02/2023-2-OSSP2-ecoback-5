import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import loginbutton from '../image/loginbutton.png';
// import googleloginbutton from '../image/googleloginbutton.png';
import GoogleLoginButton from 'kitae/GoogleLogin';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://52.79.233.106:8000/accounts/token/', {
        username: id,
        password: password
      });

      // 로그인 성공
      if (response.status === 200) {
        console.log('로그인 성공:', response.data);
        setIsLoggedIn(true); // 로그인 상태 변경
        navigate('/home'); // 메인 페이지로 이동
      }
    } catch (error) {
      console.error('로그인 요청 중 오류가 발생했습니다:', error);
      setError('로그인에 실패했습니다.'); // 실패 메시지 설정
    }
  };
  const LoginFunc = (e) => {
    e.preventDefault();
    if (!id) {
      return alert("ID를 입력하세요.");
    }
    else if (!password) {
      return alert("Password를 입력하세요.");
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
        <center>


            <a href="./Home">{/* 로그인 구현이 끝나면 <a>태그 없애고 가운데 <img> 태그만 사용 */}
                <img class="imagebutton" onClick={handleLogin} id="loginbutton" src={loginbutton} alt="loginbutton"/>           
            </a>{/* 로그인 구현이 끝나면 <a>태그 없애고 가운데 <img> 태그만 사용 */}
            
        </center>
        <center>
            <div class="hr-sect">또는</div>
            <GoogleLoginButton />
        </center>
    </html>
  );
}

export default Login;