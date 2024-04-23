import { useGetMyClassList, useGetMyJoinList, useGetMyRecipeList } from '@hooks/queries/user';
import MyPageBookmarkList from '@pages/mypage/list/bookmark/MyPageBookmarkList';
import MyPageClassList from '@pages/mypage/list/MyPageClassList';
import MyPageJoinList from '@pages/mypage/list/MyPageJoinList';
import MyPageRecipeList from '@pages/mypage/list/MyPageRecipeList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '@styles/mypage/mypageList.style';
import Text from '@components/ui/Text';

function MyPageList() {
  const { _id } = useParams();
  const { data: myCreateClass } = useGetMyClassList();
  const { data: myRecipe } = useGetMyRecipeList(_id);
  const { data: myJoinClass } = useGetMyJoinList();
  const [tab, setTab] = useState(0);

  return (
    <S.ListWrapper>
      <ul>
        <li>
          <S.Tab>
            <S.ButtonWrapper>
              <S.TabButton onClick={() => setTab(0)}>
                <Text color="var(gray--07)" typography="regular_m">
                  클래스
                </Text>
              </S.TabButton>
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <S.TabButton onClick={() => setTab(1)}>
                <Text color="var(gray--07)" typography="regular_m">
                  레시피
                </Text>
              </S.TabButton>
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <S.TabButton onClick={() => setTab(2)} disabled>
                <Text color="var(gray--07)" typography="regular_m">
                  북마크
                </Text>
              </S.TabButton>
            </S.ButtonWrapper>
            <S.ButtonWrapper>
              <S.TabButton onClick={() => setTab(3)}>
                <Text color="var(gray--07)" typography="regular_m">
                  신청 목록
                </Text>
              </S.TabButton>
            </S.ButtonWrapper>
          </S.Tab>
        </li>
      </ul>
      <div>
        {tab === 0 && <MyPageClassList myCreateClass={myCreateClass} />}
        {tab === 1 && <MyPageRecipeList myRecipe={myRecipe} />}
        {tab === 2 && <MyPageBookmarkList />}
        {tab === 3 && <MyPageJoinList myJoinClass={myJoinClass} />}
      </div>
    </S.ListWrapper>
  );
}

export default MyPageList;
