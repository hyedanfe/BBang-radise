import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionStyle = styled.section`
  margin: 0 14px;
  position: relative;

  @media all and (min-width: 768px) {
    margin: 0 70px;
  }
`;

Section.propTypes = {
  children: PropTypes.any,
  sectionTitle: PropTypes.string,
};

function Section({ children }) {
  return <SectionStyle>{children}</SectionStyle>;
}

export default Section;
