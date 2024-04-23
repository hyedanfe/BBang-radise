import styled from 'styled-components';

export const RecipeDetailWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media all and (min-width: 768px) {
    width: 100%;
    position: relative;
    padding-top: 120px;
    padding-right: 10px;
    flex-direction: row;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    gap: 80px;
  }
`;

export const RecipeDetailCard = styled.div`
  width: 100%;

  @media all and (min-width: 768px) {
    width: 35%;
  }
`;

export const RecipeDetailCardImage = styled.img`
  vertical-align: top;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 9/10;
  border-radius: 10px;
`;

export const RecipeDetailCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 6px 0px;
`;

export const RecipeDetailMain = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const RecipeDetailContent = styled.section`
  font-family: pretendard, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.55rem;
  line-height: 1.7;
  color: black;
`;

export const RecipeDetailReply = styled.div`
  margin-top: 150px;
`;
