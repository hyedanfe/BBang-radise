import { useGetMyBookmarkList } from '@hooks/queries/user';

function MyPageBookmarkList() {
  const { data } = useGetMyBookmarkList();
  console.log(data);

  return <div>MyPageBookMark</div>;
}

export default MyPageBookmarkList;
