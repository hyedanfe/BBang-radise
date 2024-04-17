import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useClassApis = () => {
  const axios = useCustomAxios();

  const postClass = (formData) => {
    return axios.post(`seller/products`, formData);
  };

  // 클래스 목록 가져오기 (품절 포함)
  const classList = () => {
    return axios.get('/products?showSoldOut=true');
  };

  // 클래스 상세페이지 가져오기
  const classDetail = (_id) => {
    return axios.get(`/products/${_id}`);
  };

  return {
    postClass,
    classList,
    classDetail,
  };
};

export default useClassApis;
