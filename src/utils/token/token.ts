import { getItem, setItem } from "../localStorage/localStorage";

let accessToken = '';

export const setToken = (token: string) => {
  accessToken = token;
  setItem('accessToken', token); // 로컬 스토리지에 accessToken 저장
};

export const getTokens = () => {
  const refreshToken = getItem('refreshToken'); // 로컬 스토리지에서 refreshToken 가져오기
  return { accessToken, refreshToken };
};
// accessToken은 빈 string으로 들어간다.