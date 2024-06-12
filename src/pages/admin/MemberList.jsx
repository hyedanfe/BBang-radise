import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import MemberCard from '@components/ui/card/MemberCard';
import { useGetUserList } from '@hooks/queries/admin';
import * as S from '@styles/admin/memberList.style';

function MemberList() {
  const { data } = useGetUserList();

  const userList = data?.item;
  console.log(userList);

  return (
    <Section>
      <S.AdminWrapper>
        <Text typography="display_l" display="block" color="black">
          회원 목록
        </Text>
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
