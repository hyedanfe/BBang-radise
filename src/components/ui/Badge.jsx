import styled from 'styled-components';
import PropTypes from 'prop-types';

const BadgeStyle = styled.div`
  display: inline-block;
  background-color: ${(props) => {
    switch (props.type) {
      case 'active':
        return 'var(--primary-01)';
      case 'closed':
        return 'var(--gray-07)';
      case 'inactive':
        return 'var(--gray-06)';
      case 'beginner':
        return 'var(--secondary-01)';
      case 'master':
        return 'var(--secondary-02)';
      default:
        return null;
    }
  }};
  padding: 2.4px 9px;
  font-family: pretendard, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--white);
  border-radius: 6px;
  letter-spacing: 0.06em;
`;

function Badge({ type }) {
  return (
    <BadgeStyle type={type}>
      {(() => {
        switch (type) {
          case 'active':
            return '모집중';
          case 'closed':
            return '모집마감';
          case 'inactive':
            return '모집종료';
          case 'beginner':
            return '베이킹 새싹';
          case 'master':
            return '베이킹 마스터';
          default:
            return null;
        }
      })()}
    </BadgeStyle>
  );
}

Badge.propTypes = {
  type: PropTypes.string,
};
export default Badge;
