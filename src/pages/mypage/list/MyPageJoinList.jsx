import ClassCard from '@components/ui/card/ClassCard';
import { ClassListContent } from '@styles/class/classList.style';
import PropTypes from 'prop-types';

MyPageJoinList.propTypes = {
  myJoinClass: PropTypes.object,
  isLoading: PropTypes.any,
  error: PropTypes.string,
};

function MyPageJoinList({ myJoinClass }) {
  console.log(myJoinClass);
  const classList = myJoinClass?.item.map((item) => <ClassCard key={item._id} item={item.products[0]} />);

  return <>{myJoinClass.item.length > 0 ? <ClassListContent>{classList}</ClassListContent> : <div>아직 신청하신 클래스가 없습니다.</div>}</>;
}

export default MyPageJoinList;
