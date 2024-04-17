import styled from 'styled-components';

export const RecipeListItemWrapper = styled.div`
  background-color: var(--gray-02);
  box-shadow: inset 0 0 15px red;
  display: flex;
  height: 8vh;
  align-items: center;
`;

export const RecipeListItemImage = styled.img`
  vertical-align: top;
  height: 80%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 25%;
`;
