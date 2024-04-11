import PropTypes from 'prop-types';

RecipeListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function RecipeListItem({ item }) {
  return (
    <>
      {item.content.image && <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.content.image.fileName}`} alt="" />}
      <p>글번호: {item._id}</p>
      <p>글제목: {item.title}</p>
      <p>작성자: {item.user.name}</p>
      <p>작성일자: {item.updatedAt}</p>
    </>
  );
}

export default RecipeListItem;
