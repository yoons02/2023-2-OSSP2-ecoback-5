import React, { useState } from 'react';
import logo from '../image/logo.png'; // 로고 이미지 경로
import loginbutton from '../image/loginbutton.png';
import GoogleLoginButton from 'kitae/GoogleLogin';
import { Link,useNavigate } from 'react-router-dom';
import '../css/Login.css';
import css from '../css/Login.css';
import API from 'api/axios';
function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
        username: id,
        password: password
     };

    API.post('/accounts/token/', userData)
        .then((response) => {
            if (response.status === 200) {
                console.log('로그인 성공:', response.data);
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh); // refresh 토큰 저장
                setIsLoggedIn(true); // 로그인 상태 변경
                alert("로그인에 성공했습니다.");
                navigate('/home'); // 메인 페이지로 이동
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
              } else if (errorData.password) {
                errorMessage = errorData.password[0];
              }

              if (errorMessage.includes('Invalid credentials')) {
                  alert('아이디 또는 비밀번호가 잘못되었습니다. 다시 시도해주세요.');
                      }
              else {
                  alert('로그인에 실패하였습니다. 다시 시도해주세요.');
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
                일회용컵으로 힘들어 하고 있는 바다거북이를 지켜주세요!
                <br/>
                <br/>
            </div>
        </center>
 
        <form onSubmit={handleLogin}>
          <center>
              <div class="input-container">
                  <label for="username">아이디</label>
                  <br></br>
                  <input type="text" id="css.username" value={id} onChange={(e) => setId(e.target.value)}  placeholder="아이디를 입력하세요" class="ip" />
              </div>
              <br></br>
              <br></br>

          </center>
          <center>
              <div class="input-container">  
                  <label for="password">비밀번호</label>
                  <br></br>
                  <input type="password" id="css.password" value={password} onChange={(e) => setPassword(e.target.value) }  placeholder="비밀번호를 입력하세요" class="ip" />           
              </div>
          </center>
          <br></br>
          <br></br>
          <Link to="/register" ><p class="ask_register">계정이 없으신가요? 가입하기 &nbsp;&nbsp;</p></Link>
          <center>

            <button className="loginbutton" type="submit" style={{width:"auto"}}>
              <img class="imagebutton"  id="loginbutton" src={loginbutton} alt="loginbutton"/>
            </button>
              
          </center>
          
        </form>
        {/* <center>
            <div class="hr-sect">또는</div>
            <GoogleLoginButton />
        </center> */}
    </html>
  );
}

export default Login;