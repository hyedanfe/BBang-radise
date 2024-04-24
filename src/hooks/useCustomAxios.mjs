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
    // timeout: 1000 * 10,
    headers: {
      'content-type': 'application/json',
      'client-id': CLIENT_ID,
    },
  });

  // 요청 인터셉터
  instance.interceptors.request.use((config) => {
    if (user) {
      let token = user.token.accessToken;
      if (config.url === REFRESH_URL) {
        token = user.token.refreshToken;
      }
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
        if (!user || config.url === REFRESH_URL) {
          const modalContent = '로그인 후 이용 가능합니다.<br/>로그인 페이지로 이동하시겠습니까?';
          const modalButtons = {
            submitText: '로그인',
            closeText: '닫기',
            handleSubmit: () => {
              navigate('/users/login', { state: { from: location.pathname } });
            },
            handleModalToggle: () => {
              toggleModal();
            },
          };
          setModalContent(modalContent, modalButtons);
        } else {
          const accessToken = await getAccessToken(instance);
          if (accessToken) {
            setUser({ ...user, token: { accessToken } });
            config.headers.Authorization = `Bearer ${accessToken}`;
          }
        }
      } else {
        return Promise.reject(err);
      }
    },
  );

  async function getAccessToken(instance) {
    try {
      const {
        data: { accessToken },
      } = await instance.get(REFRESH_URL);
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  }

  return instance;
}

export default useCustomAxios;
