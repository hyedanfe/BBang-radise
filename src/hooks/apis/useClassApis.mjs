import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useClassApis = () => {
  const axios = useCustomAxios();

  const getClassDetail = (_id) => {
    return axios.get(`products/${_id}`);
  };

  const postClass = (formData) => {
    return axios.post(`seller/products`, formData);
  };

  return { postClass, getClassDetail };
};

export default useClassApis;
