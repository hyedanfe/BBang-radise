import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGetUserInfo } from '@hooks/queries/user';
import styled from 'styled-components';
import Text from '@components/ui/Text';
import Badge from '@components/ui/Badge';
import BookmarkButton from '@components/ui/button/BookmarkButton';

const ClassCard = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const ClassCardBookmark = styled.div`
  position: absolute;
  z-index: 1;
  right: 17px;
  top: -13px;
`;

const ClassCardImgLayout = styled.div`
  width: 100%;
  height: 170px;
  background-color: var(--gray-07);
  border-radius: 10px;
  position: relative;
`;

const ClassCardImg = styled.img`
  width: 100%;
  height: 170px;
  background-color: var(--gray-07);
  border-radius: 10px;
`;

const ClassCardBadge = styled.div`
  position: absolute;
  top: 11px;
  left: 13px;
`;

const ClassCardContent = styled.div`
  margin: 0px 7px;
`;

ClassListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function ClassListItem({ item }) {
  const navigate = useNavigate();

  const mainImage = item.mainImages[0].name;
  // const { data } = useGetUserInfo(item.seller_id);
  console.log(mainImage);

  return (
    <ClassCard>
      <ClassCardBookmark>
        <BookmarkButton toggle />
      </ClassCardBookmark>
      <ClassCardImgLayout>
        <ClassCardImg src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${mainImage}`} alt="클래스대표이미지" />
        <ClassCardBadge>
          <Badge type="active"></Badge>
        </ClassCardBadge>
      </ClassCardImgLayout>
      <ClassCardContent>
        <Text typography="black_m" color="black" display="block">
          {item.name}
        </Text>
        <Text display="block">
          <Text typography="bold_m" color="gray08">
            {item.extra.startAt}
          </Text>
          <Text typography="black_s" color="primary01">
            {item.buyQuantity}/{item.quantity}명
          </Text>
        </Text>
        <Text typography="extrabold_s" color="gray08">
          {item.extra.address} {item.seller_id}
        </Text>
      </ClassCardContent>
    </ClassCard>
  );
}

export default ClassListItem;
