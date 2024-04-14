import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useFileApis = () => {
  const axios = useCustomAxios();

  const postSingleFile = (file) => {
    const formData = new FormData();
    formData.append('attach', file);

    return axios.post('/files', formData, {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return {
    postSingleFile,
  };
};

export default useFileApis;
