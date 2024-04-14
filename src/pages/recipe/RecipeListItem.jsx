import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

RecipeListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function RecipeListItem({ item }) {
  const navigate = useNavigate();

  return (
    <>
      <img style={{ width: '150px' }} src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra}`} alt="" />
      <p>글번호: {item._id}</p>

      <p onClick={() => navigate(`/recipe/${item._id}`)}>글제목: {item.title}</p>

      <p>작성자: {item.user.name}</p>
      <p>작성일자: {item.updatedAt}</p>
    </>
  );
}

export default RecipeListItem;
