import Search from '@components/ui/Search';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useGetClassInfo } from '@hooks/queries/class';
import ClassListItem from '@pages/class/ClassListItem';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const ClassListWrapper = styled.div`
  width: 100%;
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;
`;

const ClassListPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ClassListText = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ClassListSub = styled.div`
  display: flex;
  gap: 5px;
`;

const H1 = styled.h1``;

const ClassListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 2px;
`;

function ClassList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  const { isLoading, data, error, refetch } = useGetClassInfo(page, searchParams);

  useEffect(() => {
    refetch();
  }, [searchParams.toString()]);

  // 검색 요청시 주소의 query string 수정
  const handleSearch = (keyword) => {
    searchParams.set('keyword', keyword);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  const classList = data?.item.map((item) => <ClassListItem key={item._id} item={item} />);

  return (
    <Section>
      <ClassListWrapper>
        <ClassListPage>
          <ClassListText>
            <H1>
              <Text typography="display_l" display="block" color="black">
                베이킹 클래스
              </Text>
            </H1>
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
          <Search onClick={handleSearch}></Search>
        </ClassListPage>

        <ClassListContent>
          {isLoading && '로딩 중..'}
          {error && error.message}
          {classList}
        </ClassListContent>
      </ClassListWrapper>
    </Section>
  );
}

export default ClassList;
