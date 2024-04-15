import { useGetMyJoinList } from '@hooks/queries/user';

function MyPageJoinList() {
  const { data } = useGetMyJoinList();
  console.log(data);

  return <div>MyPageJoinList</div>;
}

export default MyPageJoinList;
