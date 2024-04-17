import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useClassApis = () => {
  const axios = useCustomAxios();

  const getClassDetail = (_id) => {
    return axios.get(`products/${_id}`);
  };

  const postClass = (formData) => {
    return axios.post(`seller/products`, formData);
  };

  const patchClass = (_id, formData) => {
    return axios.patch(`seller/products/${_id}`, formData);
  };

  return { postClass, getClassDetail, patchClass };
};

export default useClassApis;
