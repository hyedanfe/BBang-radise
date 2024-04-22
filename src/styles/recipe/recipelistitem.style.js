import styled from 'styled-components';

export const RecipeListItemWrapper = styled.div`
  background-color: var(--gray-02);
  display: flex;
  height: 7vh;
  align-items: center;
  padding: 2px 6px;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const RecipeListItemImage = styled.img`
  vertical-align: top;
  height: 95%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 25%;
`;

export const RecipeListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 10px;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const RecipeListItemTitle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const RecipeListItemInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-right: 5px;
`;

export const RecipeListDate = styled.div`
  padding-right: 10px;
  border-right: 2px solid var(--gray-07);
`;
