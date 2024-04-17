import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from '@styles/recipe/recipelistitem.style';
import BookmarkButton from '@components/ui/button/BookmarkButton';
import Text from '@components/ui/Text';

RecipeListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function RecipeListItem({ item }) {
  const navigate = useNavigate();

  return (
    <S.RecipeListItemWrapper onClick={() => navigate(`/recipe/${item._id}`)}>
      <S.RecipeListItemImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra}`} alt="" />
      <Text color="gray08" typography="semibold_l">
        {item.title}
      </Text>
      <S.RecipeListDate>
        <Text color="gray07" typography="semibold_s">
          {item.updatedAt.substr(0, 10)}
        </Text>
      </S.RecipeListDate>
      <Text color="gray07" typography="semibold_s">
        {item.user.name}
      </Text>
      <BookmarkButton />
    </S.RecipeListItemWrapper>
  );
}

export default RecipeListItem;
