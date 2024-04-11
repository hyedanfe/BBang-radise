import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect, useRef } from 'react';

function RecipeDetail() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { id } = useParams();

  let firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const { data } = useQuery({
    queryKey: ['posts', id],
    queryFn: () =>
      axios.get(`/posts/23`, {
        params: { incrementView: firstRender.current },
      }),
    select: (response) => response.data,
    suspense: true,
  });

  // 삭제
  const handleDelete = async () => {
    await axios.delete(`/posts/${id}`);
    alert('삭제되었습니다.');
    navigate('/recipe');
  };

  const item = data?.item;

  return (
    <>
      <div>RecipeDetail</div>

      {item && (
        <div className="main">
          <section className="card">
            <img style={{ width: '300px' }} src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra}`} alt="" />
            <h1>글제목: {item.title}</h1>
            <p>작성자: {item.user.name}</p>
            <p>작성일자: {item.updatedAt}</p>
          </section>

          <section className="content">
            <p>내용: {item.content}</p>
          </section>
        </div>
      )}
    </>
  );
}

export default RecipeDetail;
