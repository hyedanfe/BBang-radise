import { colors } from '@styles/colors';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { typographyMap } from '@styles/typography';

const Text = styled.span(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't1' }) => typographyMap[typography],
);

Text.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
  bold: PropTypes.string,
};

export default Text;
