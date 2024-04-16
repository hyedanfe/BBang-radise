import styled from 'styled-components';

export const RecipeListWrapper = styled.div`
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

export const RecipeListPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media all and (min-width: 768px) {
    max-width: 500px;
    position: sticky;

    top: 0px;
  }
`;

export const RecipeListText = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RecipeListSearch = styled.div`
  @media all and (min-width: 768px) {
    width: 86%;
    padding-left: 3px;
  }
`;
