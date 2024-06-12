import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import MemberCard from '@components/ui/card/MemberCard';
import { useGetUserList } from '@hooks/queries/admin';
import SimpleButton from '@pages/mypage/SimpleButton';
import * as S from '@styles/admin/memberList.style';
import useMemberStore from '@zustand/memberStore.mjs';

function MemberList() {
  const { data } = useGetUserList();
  const setUserData = useMemberStore((state) => state.setUser);
  const clearUserDataStorage = useMemberStore.persist.clearStorage;

  const userList = data?.item;
  console.log(userList);

  const handleLogout = () => {
    setUserData(null);
    clearUserDataStorage();
  };

  return (
    <Section>
      <S.AdminWrapper>
        <S.AdminHeader>
          <Text typography="display_l" display="block" color="black">
            회원 목록
          </Text>
          <SimpleButton onClick={handleLogout}>로그아웃</SimpleButton>
        </S.AdminHeader>

        <S.Ul>
          {userList?.map((memberItemData) => (
            <MemberCard key={memberItemData._id} memberItemData={memberItemData} />
          ))}
        </S.Ul>
      </S.AdminWrapper>
    </Section>
  );
}

export default MemberList;
