import styled from 'styled-components';

export const RecipeDetailWrapper = styled.div`
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
    gap: 50px;
  }
`;

export const RecipeDetailCard = styled.div`
  width: 22%;
  height: 521px;
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

export const RecipeDetailContent = styled.section`
  width: 50%;
  font-family: pretendard, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.55rem;
  line-height: 1.7;
  color: black;
  padding: 0 15px;
`;

export const RecipeDetailReply = styled.div`
  width: 28%;
`;
