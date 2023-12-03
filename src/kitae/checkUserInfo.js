const checkUserInfo = (username, email, password1, password2) => {
  // 아이디 검사: 아이디는 빈 문자열이 아니어야 합니다.
  if (!username) {
    return '아이디를 입력해주세요.';
  }

  // 이메일 검사: 이메일은 빈 문자열이 아니어야 하며, 이메일 형식을 따라야 합니다.
  if (!email || !email.includes('@')) {
    return '유효한 이메일 주소를 입력해주세요.';
  }

  // 비밀번호 검사: 비밀번호는 빈 문자열이 아니어야 합니다.
  if (!password1 || password1.length < 8)  {
    return '비밀번호를 입력해주세요.';
  }

  // 비밀번호 확인 검사: 비밀번호 확인은 비밀번호와 일치해야 합니다.
  if (password1 !== password2) {
    return '비밀번호가 일치하지 않습니다.';
  }

  // 모든 검사를 통과하면 null을 반환합니다.
  return null;
};

export default checkUserInfo;