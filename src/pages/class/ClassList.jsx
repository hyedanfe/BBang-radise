import Search from '@components/ui/Search';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useGetClassInfo } from '@hooks/queries/class';
import ClassCard from '@components/ui/card/ClassCard';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import RoundButton from '@components/ui/button/RoundButton';
import Modal from '@components/ui/Modal';
import useMemberStore from '@zustand/memberStore.mjs';
import useModal from '@hooks/useModal';
import { ClassListContent, ClassListPage, ClassListSearch, ClassListSub, ClassListText, ClassListWrapper } from '@styles/class/classList.style';

function ClassList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');
  const { isLoading, data, error, refetch } = useGetClassInfo(page, searchParams);

  useEffect(() => {
    refetch();
  }, [searchParams.toString()]);

  const handleSearch = (keyword) => {
    searchParams.set('keyword', keyword);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  const user = useMemberStore().user;
  const navigate = useNavigate();
  const { isOpen, handleModalToggle } = useModal();

  const handleAddClass = () => {
    if (!user) {
      handleModalToggle();
    } else {
      navigate(`/class/add`);
    }
  };

  const classList = data?.item.map((item) => <ClassCard key={item._id} item={item} />);

  return (
    <Section>
      <ClassListWrapper>
        <ClassListPage>
          <ClassListText>
            <Text typography="display_l" display="block" color="black">
              베이킹 클래스
            </Text>

            <Text typography="light_l" color="black" display="block">
              빵라다이스에서는 베이킹 마스터 주민분들께서 다양한 베이킹 클래스를 진행하고 있습니다. 베이킹 마스터분들이 진행하는 다양한 클래스에 참여하며 빵라다이스의 거주민 혜택을 누려보세요.
            </Text>
            <ClassListSub>
              <Text typography="light_s" color="black" display="block">
                *
              </Text>
              <Text typography="light_s" color="black" display="block">
                베이킹 마스터 등급이 되시면 베이킹 클래스를 주최할 수 있어요!
              </Text>
            </ClassListSub>
          </ClassListText>
          <ClassListSearch>
            <Search onClick={handleSearch}></Search>
          </ClassListSearch>
        </ClassListPage>

        <ClassListContent>
          {isLoading && '로딩 중..'}
          {error && error.message}
          {classList}
        </ClassListContent>
      </ClassListWrapper>
      <RoundButton page="add" onClick={handleAddClass} />
      <Modal
        isOpen={isOpen}
        handleModalToggle={handleModalToggle}
        handleConfirmClick={() => navigate(`/login`)}
        contentText="로그인 후 이용 가능합니다. 로그인 페이지로 이동하시겠습니까?"
        confirmText="예"
        closeText="아니오"
      />
    </Section>
  );
}

export default ClassList;
