import styled from 'styled-components';

export const ClassListWrapper = styled.div`
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

export const ClassListPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media all and (min-width: 768px) {
    max-width: 500px;
    height: 100vh;
    position: sticky;
    top: 120px;
  }
`;

export const ClassListText = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ClassListSub = styled.div`
  display: flex;
  gap: 5px;
`;

export const ClassListSearch = styled.div`
  @media all and (min-width: 768px) {
    width: 86%;
    padding: 0 10px 0 3px;
  }
`;

export const ClassListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 2px;

  > article:last-of-type {
    padding-bottom: 120px;
  }

  @media all and (min-width: 768px) {
    flex-grow: 1;
    column-gap: 30px;
    row-gap: 50px;
    padding-top: 13px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(270px, auto));
  }
`;
