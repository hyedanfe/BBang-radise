import Text from '@components/ui/Text';
import { typographyMap } from '@styles/typography';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <div>
      <Text color="primary01" display="block" fontWeight="bold" typography="t1">
        MainPage
      </Text>
      <PText>얍 시험해보고 있음!!</PText>
    </div>
  );
};

const PText = styled.p`
  ${({ typography = 't1' }) => typographyMap[typography]},
`;

export default MainPage;
