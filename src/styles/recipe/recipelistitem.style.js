import styled from 'styled-components';

export const RecipeListItemWrapper = styled.div`
  background-color: var(--gray-02);
  display: flex;
  height: 8vh;
  align-items: center;
  padding: 2px 6px;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const RecipeListItemImage = styled.img`
  vertical-align: top;
  height: 80%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 25%;
`;

export const RecipeListDate = styled.div`
  padding-right: 10px;
  border-right: 2px solid var(--gray-07);
`;
