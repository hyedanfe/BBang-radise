import styled from 'styled-components';

export const RecipeAddWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media all and (min-width: 768px) {
    flex-direction: row;
    position: relative;
    padding-top: 120px;
    gap: 100px;
  }
`;

export const RecipeAddSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-break: keep-all;

  @media all and (min-width: 768px) {
    width: 500px;
  }
`;

export const RecipeAddForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    width: 86%;
    padding-top: 10px;
  }

  & .quill {
    margin-top: 6px;
  }

  & .ql-container {
    height: 400px;
  }
`;

export const RecipeAddButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: -120px;
  width: 100%;

  @media all and (min-width: 768px) {
    margin-top: 80px;
    position: static;
  }
`;
