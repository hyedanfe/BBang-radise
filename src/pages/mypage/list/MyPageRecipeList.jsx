import RecipeListItem from '@pages/recipe/RecipeListItem';
import PropTypes from 'prop-types';
import * as S from '@styles/recipe/recipelist.style';
import { MyPageListAlert } from '@styles/mypage/mypageList.style';
import Text from '@components/ui/Text';
import { useNavigate } from 'react-router-dom';

MyPageRecipeList.propTypes = {
  myRecipe: PropTypes.object,
  isLoading: PropTypes.any,
  error: PropTypes.string,
};

function MyPageRecipeList({ myRecipe }) {
  const navigate = useNavigate();

  const myRecipeData = myRecipe.item;

  const recipeList = myRecipeData?.item.map((item) => <RecipeListItem key={item._id} item={item} />);

  return (
    <>
      {myRecipeData.item.length > 0 ? (
        <S.RecipeListContent>{recipeList}</S.RecipeListContent>
      ) : (
        <MyPageListAlert>
          <Text typography="regular_m" color="gray06" onClick={() => navigate(`/recipe/add`)}>
            아직 등록하신 레시피가 없습니다
            <br />
            <br />
            빵라다이스의 주민들과 다양한 베이킹 이야기를 나누며 빵에 대한 사랑을 쌓아보세요!
            <br />
            <br />- 베이킹 레시피 등록하기 -
          </Text>
        </MyPageListAlert>
      )}
    </>
  );
}

export default MyPageRecipeList;
