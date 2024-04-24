import styled from 'styled-components';

export const RecipeListItemContainer = styled.div`
  background-color: var(--gray-02);
  display: flex;
  height: 7vh;
  align-items: center;
  padding: 2px 6px;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 10px;
  gap: 10px;
  width: 100%;
  overflow: hidden;

  &:hover {
    background-color: white;
  }

  &:hover .item-hover {
    display: block;
    flex-shrink: 0;
  }
`;

export const RecipeListItemHover = styled.div`
  display: none;
  width: 8px;
  margin-top: 1px;
  margin-right: 2px;

  @media all and (min-width: 768px) {
    width: 9.5px;
    margin-top: 1.5px;
  }
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

export const RecipeListItemTitle = styled.h1`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  max-width: 200px;

  @media all and (min-width: 400px) {
    max-width: 100%;
  }
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
