import styled, { keyframes } from 'styled-components';

const popup = keyframes`
from{
  opacity:0;

  top:0;
}
to {
  opacity:1;
}
`;

const MainPageCoverImg = styled.img`
  position: sticky;
  width: ${(props) => props.width};
  transform: translateY(-50%);
  margin-top: ${(props) => props.margin};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: -1;
  animation: ${popup} 2s ease-in-out;
`;

function MainPageCover({ src, top, bottom, left, right, width, margin }) {
  return <MainPageCoverImg src={src} top={top} bottom={bottom} left={left} right={right} width={width} margin={margin} />;
}

export default MainPageCover;
