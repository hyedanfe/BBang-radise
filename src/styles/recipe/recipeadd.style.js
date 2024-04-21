import styled from 'styled-components';

export const RecipeAddWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 110px;
  display: flex;

  flex-direction: column;
  gap: 31px;
  margin-bottom: 100px;

  @media all and (min-width: 768px) {
    height: 100vh;
    width: 100%;
    position: absolute;
    padding-top: 120px;
    padding-right: 10px;
    flex-direction: row;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    gap: 90px;
  }
`;

export const RecipeAddSideBar = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RecipeAddForm = styled.div`
  flex-basis: 0;
  flex-grow: 2;
`;
