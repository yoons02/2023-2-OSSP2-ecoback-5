import React from "react";

function Logout() {
  // 로그아웃 함수
  const handleLogout = () => {
    // 상태 변수 초기화
    // setId("");
    // setPassword("");

    // 로컬 스토리지 비우기
    localStorage.removeItem("token");

    // 로그인 페이지로 리다이렉트
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout}>
      logout
    </button>
  );
}

export default Logout;