import { useGetMyRecipeBookmarkList, useGetMyClassBookmarkList } from '@hooks/queries/user';
import ClassBookmarkList from '@pages/mypage/list/bookmark/ClassBookmarkList';
import RecipeBookmarkList from '@pages/mypage/list/bookmark/RecipeBookmarkList';
import { useState } from 'react';

function MyPageBookmarkList() {
  const { data: myRecipeBookmark } = useGetMyRecipeBookmarkList();
  const { data: myClassBookmark } = useGetMyClassBookmarkList();

  const [tab, setTab] = useState(0);

  return (
    <>
      <button onClick={() => setTab(0)}>00000</button>
      <button onClick={() => setTab(1)}>11111</button>
      <div>
        {tab === 0 && <RecipeBookmarkList myRecipeBookmark={myRecipeBookmark} />}
        {tab === 1 && <ClassBookmarkList myClassBookmark={myClassBookmark} />}
      </div>
    </>
  );
}

export default MyPageBookmarkList;
