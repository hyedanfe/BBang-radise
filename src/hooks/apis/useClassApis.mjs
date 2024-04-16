import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useClassApis = () => {
  const axios = useCustomAxios();

  const postClass = (formData) => {
    return axios.post(`seller/products`, formData);
  };

  return { postClass };
};

export default useClassApis;
