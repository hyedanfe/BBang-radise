import Section from '@components/ui/Section';
import MyPageList from '@pages/mypage/list/MyPageList';
import MyPageMyInfo from '@pages/mypage/MyPageMyInfo';

function MyPage() {
  return (
    <>
      <Section>
        <MyPageMyInfo />
      </Section>
      <MyPageList />
    </>
  );
}

export default MyPage;
