import styled from 'styled-components';
import BookmarkButton from '@components/ui/button/BookmarkButton';
import Badge from '@components/ui/Badge';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MainPageClassCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 14px;

  &:hover .card-contents {
    transition: all 0.7s ease-in-out;
    background-color: var(--primary-02);
  }

  &:hover .card-txt {
    color: var(--white);
  }
`;

const MainPageClassImg = styled.img`
  height: 160px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
`;

const MainPageClassBookmark = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
`;

const MainPageClassBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 18px;
`;

const MainPageClassTitle = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1.8rem;
  color: var(--black);
  text-align: center;
  line-height: 1.5;
  margin-top: 4px;
`;

const MainPageClassInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  margin-top: -8px;
  margin-bottom: 6px;
`;

const MainPageClassAdress = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 1.3rem;
  color: var(--gray-08);
  text-align: center;
  line-height: 1.5;
`;

const MainPageClassQuantity = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 1.3rem;
  color: var(--primary-01);
  text-align: center;
  line-height: 1.5;
`;

const MainPageClassContent = styled.div`
  background-color: var(--gray-02);
  padding: 16px 0;
  transition: all 0.4s ease-in-out;
  border-radius: 20px;
`;

const MainPageClassText = styled.div`
  padding: 0px 26px;
  font-family: pretendard, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.3rem;
  color: var(--gray-08);
  line-height: 1.65;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

MainPageClass.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  toggle: PropTypes.string,
  adress: PropTypes.string,
  quantity: PropTypes.string,
};

function MainPageClass({ img, title, text, toggle, adress, quantity }) {
  const navigate = useNavigate();

  return (
    <MainPageClassCard onClick={() => navigate(`/class`)}>
      <MainPageClassImg src={img} />

      <MainPageClassBookmark>
        <BookmarkButton toggle={toggle} />
      </MainPageClassBookmark>

      <MainPageClassBadge>
        <Badge type="active" />
      </MainPageClassBadge>

      <MainPageClassTitle>{title}</MainPageClassTitle>

      <MainPageClassInfo>
        <MainPageClassAdress>{adress}</MainPageClassAdress>
        <MainPageClassQuantity>{quantity}명</MainPageClassQuantity>
      </MainPageClassInfo>

      <MainPageClassContent className="card-contents">
        <MainPageClassText className="card-txt">{text}</MainPageClassText>
      </MainPageClassContent>
    </MainPageClassCard>
  );
}

export default MainPageClass;
