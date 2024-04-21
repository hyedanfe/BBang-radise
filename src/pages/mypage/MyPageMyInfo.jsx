import { useNavigate, useParams } from 'react-router-dom';
import { useGetUserInfo } from '@hooks/queries/user';
import { useState } from 'react';
import useMemberStore from '@zustand/memberStore.mjs';
import Section from '@components/ui/Section';
import SimpleButton from '@pages/mypage/SimpleButton';
import * as S from '@styles/mypage/mypage.style';
import Text from '@components/ui/Text';
import Badge from '@components/ui/Badge';
import Toast from '@components/ui/Toast';
import DefaultProfile from '@assets/DefaultProfile';

function MyPageMyInfo() {
  const { _id } = useParams();
  const { data } = useGetUserInfo(_id);
  const navigate = useNavigate();
  const setUserData = useMemberStore((state) => state.setUser);
  const clearUserDataStorage = useMemberStore.persist.clearStorage;
  const [showToast, setShowToast] = useState(false);

  const user = data?.item;
  console.log(user);
  const handleLogout = () => {
    setUserData(null);
    clearUserDataStorage();
    setShowToast(true);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  //TODO: 토스트 이동 후에 안 뜸
  return (
    <S.MyPageWrapper>
      {showToast && <Toast setToast={setShowToast} text="로그아웃되었습니다." />}
      {user && (
        <>
          {user.profileImage && user.profileImage.length > 0 ? (
            <S.MyPageProfileImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}`} alt="프로필 이미지" />
          ) : (
            <DefaultProfile width={71} height={71} stroke="gray" />
          )}
          <div>
            <Text typography="extrabold_l">{user.name}</Text>
          </div>
          <div>
            <Text typography="medium_xs">{user.email}</Text>
          </div>
          <Badge type="beginner" />
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
                navigate(`/mypage/${_id}/edit`);
              }}
            >
              내 정보 수정
            </SimpleButton>
            <SimpleButton onClick={handleLogout}>로그아웃</SimpleButton>
          </div>
        </>
      )}
    </S.MyPageWrapper>
  );
}

export default MyPageMyInfo;
