import { useParams, useNavigate } from 'react-router-dom';
import { useGetUserInfo } from '@hooks/queries/user';
import Button from '@components/ui/button/Button';
import useMemberStore from '@zustand/memberStore.mjs';

function MyPageEdit() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const setUserData = useMemberStore((state) => state.setUser);

  const handleLogout = () => {
    setUserData(null);
    navigate('/');
  };

  const { data } = useGetUserInfo(_id);

  const item = data?.item || [];

  return (
    <>
      <div>{item._id}</div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </>
  );
}

export default MyPageEdit;
