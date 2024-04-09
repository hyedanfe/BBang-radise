import Button from '@components/ui/Button';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import RecipeListItem from '@pages/recipe/RecipeListItem';

function RecipeList() {
  const axios = useCustomAxios();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page');

  const { isLoading, data, error } = useQuery({
    queryKey: ['posts?type=recipe', page],
    queryFn: () =>
      axios.get('/posts?type=recipe', {
        params: {
          page,
          limit: import.meta.env.VITE_POST_LIMIT,
          keyword: searchParams.get('keyword'),
        },
      }),
    select: (response) => response.data,
    // staleTime: 1000*100, // 쿼리 실행 후 캐시가 유지되는 시간(기본, 0)
    suspense: true,
  });

  const recipeList = data?.item.map((item) => <RecipeListItem key={item._id} item={item} />);

  console.log(recipeList);

  return (
    <>
      <h1>베이킹 레시피</h1>
      <Button>글쓰기버튼</Button>
      <div>
        {isLoading && '로딩 중..'}
        {error && error.message}
        {recipeList}
      </div>
    </>
  );
}

export default RecipeList;
