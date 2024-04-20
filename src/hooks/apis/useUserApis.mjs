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
  const getMyInfo = (_id) => {
    return axios.get(`/users/${_id}`);
  };

  const getMyRecipeList = (recipe) => {
    return axios.get(`/posts`, {
      params: {
        type: recipe,
      },
    });
  };

  const getMyClassList = () => {
    return axios.get(`/seller/products`);
  };

  const getMyBookmarkList = () => {
    return axios.get(`bookmarks/product`);
  };

  const getMyJoinList = () => {
    return axios.get(`orders`);
  };

  const patchMyInfo = (_id, formData) => {
    return axios.patch(`/users/${_id}`, formData);
  };

  return {
    postSignUp,
    getEmailVerify,
    postLogin,
    getMyInfo,
    getMyRecipeList,
    getMyClassList,
    getMyBookmarkList,
    getMyJoinList,
    patchMyInfo,
  };
};

export default useUserApis;
