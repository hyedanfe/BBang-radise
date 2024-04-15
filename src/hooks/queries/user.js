import useUserApis from '@hooks/apis/useUserApis.mjs';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export const useGetUserInfo = (_id) => {
  const { getUserInfo } = useUserApis();

  return useQuery({
    queryKey: ['users', _id],
    queryFn: () => getUserInfo(_id),
    select: (response) => response.data,
    suspense: true,
  });
};

// export const useUpdateUserInfo = () => {
//   const { patchUserInfo } = useUserApis();
//   const queryClient = useQueryClient();
//   const updateUser = ({ _id, formData }) => {
//     return patchUserInfo(_id, formData);
//   };

//   return useMutation(updateUser, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('users');
//     },
//   });
// };

export const useGetUserClass = () => {
  const { getMyClassList } = useUserApis();

  return useQuery({
    queryKey: ['seller'],
    queryFn: () => getMyClassList(),
    select: (response) => response.data,
    suspense: true,
  });
};
