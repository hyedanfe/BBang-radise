import AddIcon from '@assets/AddIcon';
import BookmarkIcon from '@assets/BookmarkIcon';
import Button from '@components/ui/Button';
import RoundButton from '@components/ui/RoundButton';
import Text from '@components/ui/Text';
import { typographyMap } from '@styles/typography';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <div>
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
      <RoundButton></RoundButton>
    </div>
  );
};

const PText = styled.p`
  ${({ typography = 'semibold_s' }) => typographyMap[typography]},
`;

export default MainPage;
