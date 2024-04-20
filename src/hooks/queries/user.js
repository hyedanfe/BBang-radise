import useUserApis from '@hooks/apis/useUserApis.mjs';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export const useGetUserInfo = (_id) => {
  const { getMyInfo } = useUserApis();

  return useQuery({
    queryKey: ['users', _id],
    queryFn: () => getMyInfo(_id),
    select: (response) => response.data,
    suspense: true,
  });
};

// export const useUpdateUserInfo = () => {
//   const { patchMyInfo } = useUserApis();
//   const queryClient = useQueryClient();
//   const updateUser = ({ _id, formData }) => {
//     return patchMyInfo(_id, formData);
//   };

//   return useMutation(updateUser, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('users');
//     },
//   });
// };

export const useGetMyClassList = () => {
  const { getMyClassList } = useUserApis();

  return useQuery({
    queryKey: ['seller/products'],
    queryFn: () => getMyClassList(),
    select: (response) => response.data,
    suspense: true,
  });
};

export const useGetMyRecipeList = () => {
  const { getMyRecipeList } = useUserApis();

  return useQuery({
    queryKey: ['posts', { type: 'recipe' }],
    queryFn: () => getMyRecipeList(),
    select: (response) => response.data,
    suspense: true,
  });
};

export const useGetMyBookmarkList = () => {
  const { getMyBookmarkList } = useUserApis();

  return useQuery({
    queryKey: ['posts', { type: 'recipe' }],
    queryFn: () => getMyBookmarkList(),
    select: (response) => response.data,
    suspense: true,
  });
};

export const useGetMyJoinList = () => {
  const { getMyJoinList } = useUserApis();

  return useQuery({
    queryKey: ['orders'],
    queryFn: () => getMyJoinList(),
    select: (response) => response.data,
    suspense: true,
  });
};
