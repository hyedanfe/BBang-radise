import useMemberStore from '@zustand/memberStore.mjs';

export const useAuthenticate = () => {
  const user = useMemberStore((state) => state.user);
  const isUserLoggedIn = !!user;

  return isUserLoggedIn;
};
