import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';

export const useGetClassInfo = (page, searchParams) => {
  const axios = useCustomAxios();

  return useQuery({
    queryKey: ['/products', page],
    queryFn: () =>
      axios.get('/products', {
        params: {
          page,
          limit: import.meta.env.VITE_POST_LIMIT,
          keyword: searchParams.get('keyword'),
        },
      }),
    select: (response) => response.data,
    suspense: true,
  });
};
