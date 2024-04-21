import { useGetMyClassList, useGetMyJoinList, useGetMyRecipeList } from '@hooks/queries/user';
import MyPageBookmarkList from '@pages/mypage/list/bookmark/MyPageBookmarkList';
import MyPageClassList from '@pages/mypage/list/MyPageClassList';
import MyPageJoinList from '@pages/mypage/list/MyPageJoinList';
import MyPageRecipeList from '@pages/mypage/list/MyPageRecipeList';
import { useState } from 'react';

function MyPageList() {
  const { data: myCreateClass, isLoading, error } = useGetMyClassList();
  const { data: myRecipe } = useGetMyRecipeList();
  const { data: myJoinClass } = useGetMyJoinList();
  const [tab, setTab] = useState(0);

  return (
    <>
      <button onClick={() => setTab(0)}>00000</button>
      <button onClick={() => setTab(1)}>11111</button>
      <button onClick={() => setTab(2)}>22222</button>
      <button onClick={() => setTab(3)}>33333</button>
      <div>
        {tab === 0 && <MyPageRecipeList myRecipe={myRecipe} />}
        {tab === 1 && <MyPageClassList myCreateClass={myCreateClass} />}
        {tab === 2 && <MyPageBookmarkList />}
        {tab === 3 && <MyPageJoinList myJoinClass={myJoinClass} />}
      </div>
    </>
  );
}

export default MyPageList;
