import Text from '@components/ui/Text';
import { typographyMap } from '@styles/typography';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <div>
      <Text color="primary01" display="block" typography="display_l">
        베이킹 레시피
      </Text>
      <PText>얍 시험해보고 있음!!</PText>
    </div>
  );
};

const PText = styled.p`
  ${({ typography = 'semibold_s' }) => typographyMap[typography]},
`;

export default MainPage;
