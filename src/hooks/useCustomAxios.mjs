import useMemberStore from '@zustand/memberStore.mjs';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const API_SERVER = import.meta.env.VITE_API_SERVER;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REFRESH_URL = '/auth/refresh';

function useCustomAxios() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useMemberStore((state) => ({
    user: state.user,
  }));

  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000 * 10,
    headers: {
      'content-type': 'application/json',
      'client-id': CLIENT_ID,
    },
  });

  // 요청 인터셉터
  instance.interceptors.request.use((config) => {
    if (user && user.token) {
      let token = user.token.accessToken;
      if (config.url === REFRESH_URL) {
        token = user.token.refreshToken;
      }
      console.log('인증에 전달하는 토큰', token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // 응답 인터셉터
  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const { config, response } = err;
      if (response?.status === 401) {
        if (config.url === REFRESH_URL) {
          const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
          gotoLogin && navigate('/users/login', { state: { from: location.pathname } });
        } else {
          const accessToken = await getAccessToken(instance);
          if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return axios(config);
          }
        }
      } else {
        return Promise.reject(err);
      }
    },
  );

  // accessToken 갱신 요청
  async function getAccessToken(instance) {
    try {
      console.log('accessToken 재발급 요청');
      const {
        data: { accessToken },
      } = await instance.get(REFRESH_URL);
      console.log('accessToken 재발급 요청 결과', accessToken);
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  }

  return instance;
}

export default useCustomAxios;
