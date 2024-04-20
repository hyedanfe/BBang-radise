import { useGetMyRecipeList } from '@hooks/queries/user';

function MyPageRecipeList() {
  const { data } = useGetMyRecipeList();
  console.log(data);

  return <div>MyPageRecipe</div>;
}

export default MyPageRecipeList;
