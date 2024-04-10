import Button from '@components/ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';

function SignUpWelcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.user;

  return (
    <>
      <div>빵라다이스의 주민이 되신 {user.name}님 환영합니다! </div>
      <div>빵라다이스에 로그인하여 다양한 주민 혜택을 즐겨보세요.</div>
      <Button
        type="button"
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인하러 가기
      </Button>
    </>
  );
}

export default SignUpWelcome;
