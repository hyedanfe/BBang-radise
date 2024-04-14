import Text from '@components/ui/Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SimpleButtonStyle = styled.button`
  cursor: pointer;
`;

const SimpleButton = ({ children, ...rest }) => {
  return (
    <SimpleButtonStyle type="button" {...rest}>
      <Text typography="light_s">{children}</Text>
    </SimpleButtonStyle>
  );
};

SimpleButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SimpleButton;
