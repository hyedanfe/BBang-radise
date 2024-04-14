import AddIcon from '@assets/AddIcon';
import ArrowIcon from '@assets/ArrowIcon';
import BookmarkIcon from '@assets/BookmarkIcon';
import BookmarkButton from '@components/ui/button/BookmarkButton';
import Button from '@components/ui/button/Button';
import CommentDeleteButton from '@components/ui/button/CommentDeleteButton';
import CommentEditButton from '@components/ui/button/CommentEditButton';
import RoundButton from '@components/ui/button/RoundButton';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import TextArea from '@components/ui/TextArea';
import { typographyMap } from '@styles/typography';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Section>
      <Text color="primary01" display="block" typography="display_xl">
        베이킹 레시피
        <BookmarkIcon fill="var(--primary-01)" width="30" />
      </Text>
      <PText>얍 시험해보고 있음!!</PText>
      <AddIcon stroke="var(--primary-01)" width="100" />
      <Button type="button" color="var(--gray-08)">
        버튼 테스트
      </Button>
      <Button type="submit">제출 버튼 테스트</Button>
      <RoundButton page="edit"></RoundButton>
      <BookmarkButton toggle={false}></BookmarkButton>
      <BookmarkButton></BookmarkButton>
      <BookmarkButton toggle={true}></BookmarkButton>
      <CommentEditButton></CommentEditButton>
      <CommentDeleteButton></CommentDeleteButton>
      <ArrowIcon stroke="var(--primary-01)"></ArrowIcon>
      <TextArea maxLength="49" validateText="50자 이내로 작성해주세요"></TextArea>
    </Section>
  );
};

const PText = styled.p`
  ${({ typography = 'semibold_s' }) => typographyMap[typography]},
`;

export default MainPage;
