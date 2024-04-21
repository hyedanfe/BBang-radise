import ArrowIcon from '@assets/ArrowIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainPageRecipeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: var(--gray-02);
  padding: 5px 6px 5px 13px;
  border-radius: 10px;

  &:hover {
    background-color: white;

    & .recipe-hover {
      display: flex;
    }
  }
`;

const MainPageRecipeArrow = styled.div`
  display: none;
`;

const MainPageRecipeImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  object-fit: cover;
  margin-left: 3px;
`;

const MainPageRecipeTitle = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.6rem;
  color: var(--gray-08);
  line-height: 1.5;
`;

MainPageRecipe.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

function MainPageRecipe({ title, img }) {
  return (
    <MainPageRecipeCard>
      <MainPageRecipeArrow className="recipe-hover">
        <ArrowIcon width="13px" stroke="var(--primary-01)" />
      </MainPageRecipeArrow>
      <MainPageRecipeImg src={img} />
      <MainPageRecipeTitle>{title}</MainPageRecipeTitle>
    </MainPageRecipeCard>
  );
}

export default MainPageRecipe;
