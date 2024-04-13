import Button from '@components/ui/button/Button';
import useMemberStore from '@zustand/memberStore.mjs';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();
  const setUserData = useMemberStore((state) => state.setUser);

  const handleLogout = () => {
    setUserData(null);
    navigate('/');
  };
  return (
    <div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </div>
  );
}

export default MyPage;
