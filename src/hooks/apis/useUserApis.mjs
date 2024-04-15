import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useUserApis = () => {
  const axios = useCustomAxios();

  const postSignUp = (formData) => {
    return axios.post('/users', formData);
  };

  const getEmailVerify = (email) => {
    return axios.get('/users/email', {
      params: {
        email: email,
      },
    });
  };

  const postLogin = (formData) => {
    return axios.post('/users/login', formData);
  };

  // 마이페이지
  const getUserInfo = (_id) => {
    return axios.get(`/users/${_id}`);
  };

  const getMyClassList = () => {
    return axios.get(`/seller/products`);
  };

  const patchUserInfo = (_id, formData) => {
    return axios.patch(`/users/${_id}`, formData);
  };

  return {
    postSignUp,
    getEmailVerify,
    postLogin,
    getUserInfo,
    getMyClassList,
    patchUserInfo,
  };
};

export default useUserApis;
