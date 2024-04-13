import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionStyle = styled.section`
  margin: 0 14px;

  @media all and (min-width: 768px) {
    margin: 0 50px;
  }
`;

Section.propTypes = {
  children: PropTypes.any,
  sectionTitle: PropTypes.string,
};

function Section({ children, sectionTitle }) {
  return (
    <SectionStyle>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      {children}
    </SectionStyle>
  );
}

export default Section;
