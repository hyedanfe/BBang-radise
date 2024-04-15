import ArrowIcon from '@assets/ArrowIcon';
import Badge from '@components/ui/Badge';
import Text from '@components/ui/Text';
import BookmarkButton from '@components/ui/button/BookmarkButton';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ClassCardContainer = styled.article`
  width: 100%;
  position: relative;

  &:hover .card-hover {
    display: block;
  }
`;

const ClassCardBookmark = styled.div`
  position: absolute;
  z-index: 1;
  right: 17px;
  top: -12px;
`;

const ClassCardNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
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
  object-fit: cover;
  border-radius: 10px;
`;

const ClassCardBadge = styled.div`
  position: absolute;
  top: 11px;
  left: 13px;
`;

const ClassCardContent = styled.div`
  margin: 0px 7px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ClassCardTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  font-family: pretendard, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const ClassCardHover = styled.div`
  display: none;
  margin-top: 4px;
  margin-right: 6px;
`;

const ClassCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassCardActive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClassCardStatic = styled.div`
  display: flex;
  justify-content: space-between;
`;

ClassCard.propTypes = {
  item: PropTypes.object.isRequired,
};

function ClassCard({ item }) {
  const navigate = useNavigate();
  const mainImage = item.mainImages[0].name;

  return (
    <ClassCardContainer>
      <ClassCardBookmark>
        <BookmarkButton toggle />
      </ClassCardBookmark>

      <ClassCardNavigation onClick={() => navigate(`/class/${item._id}`)}>
        <ClassCardImgLayout>
          <ClassCardImg src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${mainImage}`} alt="클래스 대표 이미지" />
          <ClassCardBadge>
            <Badge type="active"></Badge>
          </ClassCardBadge>
        </ClassCardImgLayout>

        <ClassCardContent>
          <ClassCardTitle>
            <ClassCardHover className="card-hover">
              <ArrowIcon width="9px" stroke="var(--primary-01)"></ArrowIcon>
            </ClassCardHover>

            <Text typography="black_m" color="black" display="block">
              {item.name}
            </Text>
          </ClassCardTitle>

          <ClassCardInfo>
            <ClassCardActive>
              <Text typography="bold_m" color="gray08">
                {item.extra.classAt}
              </Text>
              <Text typography="black_s" color="primary01">
                {item.buyQuantity}/{item.quantity}명
              </Text>
            </ClassCardActive>

            <ClassCardStatic>
              <Text typography="extrabold_s" color="gray08">
                {item.extra.address}
              </Text>
              <Text typography="extrabold_s" color="gray08">
                {item.seller_id}
              </Text>
            </ClassCardStatic>
          </ClassCardInfo>
        </ClassCardContent>
      </ClassCardNavigation>
    </ClassCardContainer>
  );
}

export default ClassCard;
