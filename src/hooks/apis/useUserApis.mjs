import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useUserApis = () => {
  const axios = useCustomAxios();

  const postSignUp = (formData) => {
    return axios.post('/users', formData);
  };

  const postLogin = (formData) => {
    return axios.post('/users/login', formData);
  };

  return {
    postSignUp,
    postLogin,
  };
};

export default useUserApis;
