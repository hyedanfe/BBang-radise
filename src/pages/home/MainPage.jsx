import Text from '@components/ui/Text';

const MainPage = () => {
  return (
    <div>
      <Text color="yellow" display="block" fontWeight="bold" typography="t1">
        MainPage
      </Text>
      {/* <PText>얍 시험해보고 있음!!</PText> */}
    </div>
  );
};

// const PText = styled.p`
//   ${({ typography = 't1' }) => typographyMap[typography]},
// `;

export default MainPage;
