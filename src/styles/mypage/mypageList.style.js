import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 30px;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 5% 5% 0 0;
  margin-top: 0;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid var(--gray-07);
  border-radius: 50px;
  box-shadow: 1px 1px 1px 0px purple;
  margin: 10px 0 40px 0;
  box-sizing: border-box;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
`;

export const TabButton = styled.button`
  border-right: 1px solid var(--gray-07);
  padding: 20px;
`;

export const TabHandler = styled.hr`
  width: 2px;
  height: 66px;
  background-color: var(--gray-07);
`;
