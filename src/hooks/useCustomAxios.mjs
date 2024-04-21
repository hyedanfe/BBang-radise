import useMemberStore from '@zustand/memberStore.mjs';
import { useModalStore, setModalContent } from '@zustand/modalStore.mjs';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const API_SERVER = import.meta.env.VITE_API_SERVER;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REFRESH_URL = '/auth/refresh';

function useCustomAxios() {
  const navigate = useNavigate();
  const location = useLocation();

  // 모달
  const toggleModal = useModalStore((state) => state.toggleModal);
  const { user, setUser } = useMemberStore((state) => ({
    user: state.user,
    setUser: state.setUser,
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
    if (user) {
      // 1-1. 로그인 된 사용자일 경우
      // 2. token에 accessToken을 추가한다.
      let token = user.token.accessToken;
      if (config.url === REFRESH_URL) {
        // 14. 요청한 url이 refreshToken을 보내서 accessToken을 갱신하는 url일 경우
        // 15. Authorization 헤더에 accessToken 대신 refreshToken을 추가한다.
        token = user.token.refreshToken;
      }
      // 3. API 서버에 사용자를 인증하기 위해 Authorization 헤더에 토큰을(accessToken 또는 refreshToken) 추가한다.
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 4. 로그인 된 사용자일 경우 Authorization 헤더가 추가된 요청정보를 가지고 axios 요청을 진행한다.
    // 1-2. 로그인 되지 않은 사용자일 경우 Authorization 헤더 없이 axios 요청을 진행한다.
    return config;
  });

  // 응답 인터셉터
  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const { config, response } = err;
      if (response?.status === 401) {
        // 5. 서버에서 인증 실패 메세지를 보낼 경우
        if (!user || config.url === REFRESH_URL) {
          // 5-1. 로그인 하지 않았거나 refreshToken 인증 실패일 경우
          // const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
          // gotoLogin && navigate('/users/login', { state: { from: location.pathname } });
          const modalContent = '로그인 후 이용 가능합니다.<br/>로그인 페이지로 이동하시겠습니까?';
          const modalButtons = {
            submitText: '로그인',
            closeText: '닫기',
            handleSubmit: () => {
              navigate('/users/login', { state: { from: location.pathname } });
            },
            handleModalToggle: () => {
              toggleModal(); // 모달 닫기
            },
          };
          // 모달 스토어 업데이트
          setModalContent(modalContent, modalButtons);
        } else {
          // 6. accessToken 인증 실패일 경우
          // 7. refresh 토큰으로 access 토큰 재발급 요청
          const accessToken = await getAccessToken(instance);
          if (accessToken) {
            // 10. refreshToken으로 accessToken 발급에 성공할 경우
            setUser({ ...user, token: { accessToken } }); // 11. 로그인한 사용자 정보에 갱신된 accessToken 저장
            config.headers.Authorization = `Bearer ${accessToken}`; // 12. Authorization 헤더에 갱신된 accessToken 지정
            // 13. 갱신된 accessToken으로 서버에 재요청
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
      // 8. refreshToken으로 accessToken을 갱신하는 요청을 보내서 accessToken을 꺼낸다.(/auth/refresh)
      const {
        data: { accessToken },
      } = await instance.get(REFRESH_URL);
      // 9. 서버로부터 받은 accessToken을 반환한다.
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  }

  return instance;
}

export default useCustomAxios;
