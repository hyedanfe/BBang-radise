import { useNavigate, useParams } from 'react-router-dom';
import useMemberStore from '@zustand/memberStore.mjs';
import Section from '@components/ui/Section';
import SimpleButton from '@pages/mypage/SimpleButton';
import * as S from '@styles/mypage/mypage.style';
import { useGetUserInfo } from '@hooks/queries/user';
import Text from '@components/ui/Text';

function MyPage() {
  const { _id } = useParams();
  const { data } = useGetUserInfo(_id);
  const navigate = useNavigate();
  const setUserData = useMemberStore((state) => state.setUser);
  const clearUserDataStorage = useMemberStore.persist.clearStorage;

  const user = data?.item;
  console.log(user);

  const handleLogout = () => {
    alert('로그아웃되었습니다.');
    setUserData(null);
    clearUserDataStorage();
    navigate('/');
  };

  return (
    <Section>
      <S.MyPageWrapper>
        {user && (
          <>
            <S.MyPageProfileImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}`} alt="프로필 이미지" />
            <div>
              <Text typography="extrabold_l">{user.name}</Text>
            </div>
            <div>
              <Text typography="medium_xs">{user.email}</Text>
            </div>
            <div>베이킹 새싹</div>
            <div>
              <Text typography="light_s">
                이곳은 베이킹 클래스 페이지 입니다. 빵라다이스의 거주민들은 서로 빵라다이스에 모여 빵을 만듭니다. 베이킹 마스터가 진행하는 베이킹 클래스를 들어보며 빵라다이스 거주민이 되어보세요.
              </Text>
            </div>
            <div>
              <SimpleButton>베이킹 마스터로 승급하기</SimpleButton>
            </div>
            <div>
              <SimpleButton
                onClick={() => {
                  navigate(`/mypage/${_id}/edit`, { state: { user: user } });
                }}
              >
                내 정보 수정
              </SimpleButton>
              <SimpleButton onClick={handleLogout}>로그아웃</SimpleButton>
            </div>
          </>
        )}
      </S.MyPageWrapper>
    </Section>
  );
}

export default MyPage;
