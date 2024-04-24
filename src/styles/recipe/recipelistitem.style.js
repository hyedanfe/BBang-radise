import styled from 'styled-components';

export const RecipeListItemContainer = styled.div`
  background-color: var(--gray-02);
  display: flex;
  height: 50px;
  align-items: center;
  padding: 3px 14px 3px 6px;
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

  @media all and (min-width: 768px) {
    height: 60px;
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
  border-radius: 10px;
`;

export const RecipeListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
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
  flex-shrink: 0;
`;

export const RecipeListDate = styled.div`
  padding-right: 10px;
  border-right: 2px solid var(--gray-07);
`;

export const RecipeListBookmark = styled.div`
  display: flex;
  margin: auto 0;
  margin-left: 10px;
`;
