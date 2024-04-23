import RecipeListItem from '@pages/recipe/RecipeListItem';
import PropTypes from 'prop-types';
import * as S from '@styles/recipe/recipelist.style';

MyPageRecipeList.propTypes = {
  myRecipe: PropTypes.object,
  isLoading: PropTypes.any,
  error: PropTypes.string,
};

function MyPageRecipeList({ myRecipe }) {
  const myRecipeData = myRecipe.item;

  const recipeList = myRecipeData?.item.map((item) => <RecipeListItem key={item._id} item={item} />);

  return <>{myRecipeData.item.length > 0 ? <S.RecipeListContent>{recipeList}</S.RecipeListContent> : <div>아직 작성하신 레시피가 없습니다.</div>}</>;
}

export default MyPageRecipeList;
