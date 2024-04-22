import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    position: relative;
    padding-top: 120px;
    max-width: 500px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    width: 86%;
  }
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
`;

export const SignUpEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const SignUpValidation = styled.div`
  margin-left: auto;
`;
