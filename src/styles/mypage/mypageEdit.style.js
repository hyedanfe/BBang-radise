import styled from 'styled-components';

export const MyPageWrapper = styled.div`
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

export const MyPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-break: keep-all;

  @media all and (min-width: 768px) {
    width: 500px;
  }
`;

export const MyPageButton = styled.div`
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

export const MyPageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media all and (min-width: 768px) {
    width: 86%;
    padding-top: 10px;
    display: grid;
    column-gap: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill);
  }
`;

export const MyPageProfilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MyPageProfileImage = styled.img`
  object-fit: cover;
  width: 81px;
  height: 81px;
  border-radius: 50%;
`;

// Edit
export const EditProfileImage = styled.img`
  object-fit: cover;
  width: 71px;
  height: 71px;
  border-radius: 5px;
`;
