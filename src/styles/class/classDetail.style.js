import styled from 'styled-components';

export const ClassDetailWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media all and (min-width: 768px) and (max-width: 1200px) {
    padding-top: 120px;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 70px;
    height: calc(100vh - 50px);
  }

  @media all and (min-width: 1200px) {
    padding-top: 120px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 70px;
    height: calc(100vh - 50px);
  }
`;

export const ClassDetailCover = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const SwiperWrapper = styled.div`
  width: 100vw;
  margin: 0 -14px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;

  & swiper-slide {
    width: 90%;
    height: calc(100vw - 28px);
    border-radius: 10px;
    overflow: hidden;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media all and (min-width: 768px) {
    width: 100%;

    & swiper-slide {
      width: 100%;
      height: calc(100vh - 160px);
    }
  }
`;

export const ClassDetailImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgb(47, 34, 25);
  mix-blend-mode: color;
  z-index: 2;
`;

export const ClassDetailBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
  z-index: 1;

  @media all and (min-width: 768px) {
    left: 8px;
    top: 20px;
  }
`;

export const ClassDetailBookmark = styled.div`
  position: absolute;
  right: 32px;
  top: -13px;
  z-index: 1;

  @media all and (min-width: 768px) {
    right: 10px;
  }
`;

export const ClassDetailInfo = styled.div`
  padding: 0 9px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media all and (min-width: 768px) and (max-width: 1200px) {
    position: relative;
    min-width: 300px;
    gap: 30px;
  }

  @media all and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 70px;
    height: calc(100vh - 160px);
  }
`;

export const ClassDetailInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  @media all and (min-width: 768px) {
    gap: 26px;
  }
`;

export const ClassDetailInfoMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ClassDetailInfoDate = styled.div`
  display: flex;
  flex-direction: column;

  & .class-date {
    margin-top: -3px;
  }
`;

export const ClassDetailInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media all and (min-width: 768px) {
    gap: 8px;
  }
`;

export const ClassDetailInfoBottom = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClassDetailContent = styled.div`
  background-color: var(--gray-02);
  padding: 25px 24px;
  border-radius: 15px;
  margin: 0 -5px;
  margin-top: 10px;

  @media all and (min-width: 768px) and (max-width: 1200px) {
    margin: 0 -7px;
    margin-top: unset;
    padding: 30px 30px;
    overflow: scroll;
    flex-basis: 0;
    flex-grow: 1;
  }

  @media all and (min-width: 1200px) {
    margin: unset;
    padding: 20px 35px;
    flex-basis: 0;
    flex-grow: 1;
    overflow: scroll;
  }
`;

export const ClassDetailButton = styled.div`
  position: fixed;
  bottom: 20px;
  width: calc(100vw - 28px);
  margin-left: -6px;
  z-index: 99;

  @media all and (min-width: 768px) and (max-width: 1200px) {
    position: static;
    bottom: 0px;
    width: 102%;
    margin-left: -6px;
  }

  @media all and (min-width: 1200px) {
    position: absolute;
    bottom: 0px;
    width: 103%;
    margin-left: -3px;
  }
`;
