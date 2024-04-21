import ClassCard from '@components/ui/card/ClassCard';
import { ClassListContent } from '@styles/class/classList.style';
import PropTypes from 'prop-types';

MyPageClassList.propTypes = {
  myCreateClass: PropTypes.object,
  isLoading: PropTypes.any,
  error: PropTypes.string,
};

function MyPageClassList({ myCreateClass }) {
  console.log(myCreateClass);
  const classList = myCreateClass?.item.map((item) => <ClassCard key={item._id} item={item} />);

  return <>{myCreateClass.item.length > 0 ? <ClassListContent>{classList}</ClassListContent> : <div>아직 개설하신 클래스가 없습니다.</div>}</>;
}

export default MyPageClassList;
