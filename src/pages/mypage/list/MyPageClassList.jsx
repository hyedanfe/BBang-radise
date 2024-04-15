import { useGetMyClassList } from '@hooks/queries/user';

function MyPageClassList() {
  const { data } = useGetMyClassList();

  console.log(data);

  return <div>MyPageClass</div>;
}

export default MyPageClassList;
