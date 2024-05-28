import styled from 'styled-components';

export const RecipeListWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media all and (min-width: 768px) {
    width: 100%;
    position: relative;
    padding-top: 120px;
    padding-right: 10px;
    flex-direction: row;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    gap: 10px;
  }
`;

export const RecipeListPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media all and (min-width: 768px) {
    max-width: 500px;
    min-width: 300px;
    height: 100vh;
    position: sticky;
    top: 120px;
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

export const RecipeListContent = styled.section`
  width: 100%;
  padding-right: 12px;
`;
