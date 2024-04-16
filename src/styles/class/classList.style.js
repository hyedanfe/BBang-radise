import styled from 'styled-components';

export const ClassListWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 110px;
  display: flex;

  flex-direction: column;
  gap: 40px;
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
    gap: 10px;
  }
`;

export const ClassListPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media all and (min-width: 768px) {
    max-width: 500px;
    position: sticky;

    top: 0px;
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
    padding-left: 3px;
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
    column-gap: 50px;
    row-gap: 56px;
    padding-top: 13px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(270px, auto));
  }
`;
