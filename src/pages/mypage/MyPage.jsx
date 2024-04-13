import { useNavigate, useParams } from 'react-router-dom';
import useMemberStore from '@zustand/memberStore.mjs';
import Section from '@components/ui/Section';
import SimpleButton from '@pages/mypage/SimpleButton';
import * as S from '@styles/mypage/mypage.style';

function MyPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const setUserData = useMemberStore((state) => state.setUser);

  const clearUserDataStorage = useMemberStore.persist.clearStorage;
  const handleLogout = () => {
    alert('로그아웃되었습니다.');
    setUserData(null);
    clearUserDataStorage();
    navigate('/');
  };

  return (
    <Section>
      <S.MyPageWrapper>
        <div>
          <SimpleButton>베이킹 마스터로 승급하기</SimpleButton>
        </div>
        <div>
          <SimpleButton
            onClick={() => {
              navigate(`/mypage/${_id}/edit`);
            }}
          >
            내 정보 수정
          </SimpleButton>
          <SimpleButton onClick={handleLogout}>로그아웃</SimpleButton>
        </div>
      </S.MyPageWrapper>
    </Section>
  );
}

export default MyPage;
