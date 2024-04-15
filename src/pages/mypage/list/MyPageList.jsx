import MyPageBookmarkList from '@pages/mypage/list/bookmark/MyPageBookmarkList';
import MyPageClassList from '@pages/mypage/list/MyPageClassList';
import MyPageJoinList from '@pages/mypage/list/MyPageJoinList';
import MyPageRecipeList from '@pages/mypage/list/MyPageRecipeList';

function MyPageList() {
  return (
    <>
      <MyPageRecipeList />
      <MyPageClassList />
      <MyPageBookmarkList />
      <MyPageJoinList />
    </>
  );
}

export default MyPageList;
