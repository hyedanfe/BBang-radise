import styled from 'styled-components';

export const MainPageClassCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;

  &:hover .card-contents {
    transition: all 0.7s ease-in-out;
    background-color: var(--primary-02);
  }

  &:hover .card-txt {
    color: var(--white);
  }
`;

export const MainPageClassImg = styled.img`
  height: 160px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
`;

export const MainPageClassBookmark = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
`;

export const MainPageClassBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 18px;
`;

export const MainPageClassTitle = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1.8rem;
  color: var(--black);
  text-align: center;
  line-height: 1.5;
  margin-top: 4px;
`;

export const MainPageClassInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  margin-top: -8px;
  margin-bottom: 6px;
`;

export const MainPageClassAdress = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1.3rem;
  color: var(--gray-08);
  text-align: center;
  line-height: 1.5;
`;

export const MainPageClassQuantity = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 1.3rem;
  color: var(--primary-01);
  text-align: center;
  line-height: 1.5;
`;

export const MainPageClassContent = styled.div`
  background-color: var(--gray-02);
  padding: 16px 0;
  transition: all 0.4s ease-in-out;
  border-radius: 20px;
`;

export const MainPageClassText = styled.div`
  padding: 0px 26px;
  font-family: pretendard, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.3rem;
  color: var(--gray-08);
  line-height: 1.65;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
