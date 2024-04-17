import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from '@styles/recipe/recipelistitem.style';
import BookmarkButton from '@components/ui/button/BookmarkButton';

RecipeListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function RecipeListItem({ item }) {
  const navigate = useNavigate();

  return (
    <S.RecipeListItemWrapper onClick={() => navigate(`/recipe/${item._id}`)}>
      <S.RecipeListItemImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra}`} alt="" />
      <p>{item.title}</p>
      <p>{item.updatedAt.substr(0, 10)}</p>
      <p>{item.user.name}</p>
      <BookmarkButton />
    </S.RecipeListItemWrapper>
  );
}

export default RecipeListItem;
