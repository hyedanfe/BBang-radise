import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 30px;
  margin: 0 -14px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, var(--gray-02) 40%);
  border-radius: 5% 5% 0 0;
  margin-top: 28px;
  padding-bottom: 40px;
  box-shadow: 0 -4px 5px 0 rgba(83, 71, 63, 0.13);

  @media all and (min-width: 768px) {
    margin: 48px -70px 0px -70px;
    padding: 40px 10% 40px 10%;
    border-radius: 30px;
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;

  margin: 0 -3px;
  margin-bottom: 40px;

  & :first-child {
    padding-left: 3px;
    border-radius: 30px 0 0 30px;
  }

  & :last-child {
    border-right: unset;
    padding-right: 3px;
    border-radius: 0 30px 30px 0;
    margin-right: 1.5px;
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  text-align: center;
  width: 25%;
  border: 1.5px solid var(--gray-06);
  margin-right: -1.5px;
  transition: all 0.3s;

  background-color: ${(props) => (props.tab == 'true' ? 'var(--primary-02)' : null)};

  & span {
    color: ${(props) => (props.tab == 'true' ? 'var(--white)' : null)};
  }

  @media all and (min-width: 768px) {
    &:hover {
      background-color: var(--gray-05);
    }
  }
`;

export const TabButton = styled.button`
  padding: 9px 0;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const TabHandler = styled.hr`
  width: 2px;
  height: 66px;
  background-color: var(--gray-07);
`;

export const MyPageListAlert = styled.div`
  text-align: center;
  padding: 0 20px;
`;
