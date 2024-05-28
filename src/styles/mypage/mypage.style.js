import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    width: 100%;
    position: relative;
    padding-top: 120px;
    padding-right: 10px;
  }
`;

export const MyPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
  max-width: 76%;

  @media all and (min-width: 768px) {
    max-width: 20%;
  }
`;

export const MyPageProfileImage = styled.img`
  object-fit: cover;
  width: 81px;
  height: 81px;
  border-radius: 50%;
`;

export const MyPageInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  text-align: center;
`;

export const MyPageInfoButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 15px;
  align-items: center;
`;

export const MyPageInfoButtonBottom = styled.div`
  display: flex;

  gap: 50px;
`;

// Edit
export const EditProfileImage = styled.img`
  object-fit: cover;
  width: 71px;
  height: 71px;
  border-radius: 5px;
`;
