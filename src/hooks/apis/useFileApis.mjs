import useCustomAxios from '@hooks/useCustomAxios.mjs';

const useFileApis = () => {
  const axios = useCustomAxios();

  const postSingleFile = (file) => {
    const formData = new FormData();
    formData.append('attach', file);

    return axios.post('/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const postMultipleFiles = (files) => {
    const filesArray = Array.from(files);

    if (filesArray.length > 0) {
      const formData = new FormData();

      filesArray.forEach((file) => {
        const blob = new Blob([file], { type: file.type });
        formData.append(`attach`, blob, file.name);
      });

      return axios.post(`/files`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }
  };

  return {
    postSingleFile,
    postMultipleFiles,
  };
};

export default useFileApis;
