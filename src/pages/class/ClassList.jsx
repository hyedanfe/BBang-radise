import Search from '@components/ui/Search';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import { useGetClassInfo } from '@hooks/queries/class';
import ClassCard from '@components/ui/card/ClassCard';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const ClassListWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 110px;
  display: flex;

  flex-direction: column;
  gap: 30px;
  margin-bottom: 100px;

  @media all and (min-width: 768px) {
    width: calc(100% - 96px);
    height: 100vh;
    position: fixed;
    padding-top: 120px;
    flex-direction: row;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    gap: 60px;
  }
`;

const ClassListPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media all and (min-width: 768px) {
    max-width: 500px;
    position: sticky;

    top: 0px;
  }
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

const ClassListSearch = styled.div`
  @media all and (min-width: 768px) {
    width: 86%;
    padding-left: 3px;
  }
`;

const ClassListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 2px;

  > article:last-of-type {
    padding-bottom: 120px;
  }

  @media all and (min-width: 768px) {
    flex-grow: 1;
    columns-gap: 2%;
    padding-top: 13px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
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
    </Section>
  );
}

export default ClassList;
