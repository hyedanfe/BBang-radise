import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useClassApis = () => {
  const axios = useCustomAxios();

  // 클래스 목록 가져오기 (품절 포함)
  const classList = () => {
    return axios.get('/products?showSoldOut=true');
  };

  const getClassDetail = (_id) => {
    return axios.get(`products/${_id}`);
  };

  const postClass = (formData) => {
    return axios.post(`seller/products`, formData);
  };

  const patchClass = (_id, formData) => {
    return axios.patch(`seller/products/${_id}`, formData);
  };

  return { postClass, getClassDetail, patchClass, classList };
};

export default useClassApis;
