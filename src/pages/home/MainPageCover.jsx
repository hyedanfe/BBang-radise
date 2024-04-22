import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const popup = keyframes`
from{
  opacity:0;
}
to {
  opacity:1;
}
`;

const MainPageCoverImg = styled.img`
  width: ${(props) => props.width};
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
  z-index: -1;
  animation: ${popup} 1s ease-in-out;
`;

MainPageCover.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  margintop: PropTypes.string,
  marginleft: PropTypes.string,
};

function MainPageCover({ src, width, margintop, marginleft }) {
  return <MainPageCoverImg src={src} width={width} marginTop={margintop} marginLeft={marginleft} />;
}

export default MainPageCover;
