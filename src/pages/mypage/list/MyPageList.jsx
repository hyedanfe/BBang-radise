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
      <ul>
        <li class="board-list">
          <div class="card">
            <div class="cover">
              <img class="cover-src" src="images/cat.png" alt="프로필" />
            </div>
            <div class="header">
              <p class="header-name">짬뽕이</p>
              <p class="header-date">12시간 전</p>
            </div>
            <hr class="card-handler" />
            <a class="link" href="#" data-modal-trigger="modal1">
              <div class="title">
                <h2>CSS는 왜 이렇게 흥미로운가요?</h2>
              </div>
            </a>
            <div class="footer">
              <button class="footer-button" type="button" data-nav-button>
                뭘까
              </button>
            </div>{' '}
          </div>{' '}
        </li>
      </ul>

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
