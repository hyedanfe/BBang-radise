import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';

export const useGetClassInfo = () => {
  const axios = useCustomAxios();

  return useQuery({
    queryKey: ['/products'],
    queryFn: () =>
      axios.get('/products', {
        params: {
          limit: import.meta.env.VITE_POST_LIMIT,
        },
      }),
    select: (response) => response.data,
    suspense: true,
  });
};
