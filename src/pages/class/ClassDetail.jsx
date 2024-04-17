import Section from '@components/ui/Section';
import { useGetClassDetail } from '@hooks/queries/class';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { register } from 'swiper/element/bundle';
register();

const ClassDetailWrapper = styled.div`
  width: 100%;
  position: reltaive;
  padding-top: 110px;
`;

const SwiperWrapper = styled.div`
  width: 100vw;
  margin: 0 -14px;

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
`;

function ClassDetail() {
  const { _id } = useParams();
  const { data } = useGetClassDetail(_id);

  const item = data?.item;

  const mainImage = item?.mainImages[0].name;
  const detailImages = item?.detailImages.map((image) => (
    <swiper-slide key={image.name}>
      <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${image.name}`} />
    </swiper-slide>
  ));

  return (
    <Section>
      <ClassDetailWrapper>
        <SwiperWrapper>
          <swiper-container slides-per-view="auto" centered-slides="true" space-between="10" navigation="true">
            <swiper-slide>
              <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${mainImage}`} alt="클래스 이미지" />
            </swiper-slide>
            {detailImages}
          </swiper-container>
        </SwiperWrapper>
        {item.name}
        {item.classAt}
        {item.startAt}
        {item.endAt}
        {item.adress}
        {item.seller.name}
        {item.quantity}
        {item.buyQuantity}
        {item.price}
        {item.content}
      </ClassDetailWrapper>
    </Section>
  );
}

export default ClassDetail;
