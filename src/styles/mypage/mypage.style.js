import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  width: 100%;
  position: relative;
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

export const MyPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
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
