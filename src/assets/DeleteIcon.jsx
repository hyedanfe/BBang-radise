import PropTypes from 'prop-types';

DeleteIcon.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};

function DeleteIcon({ stroke, width }) {
  return (
    <svg width={width} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11L11 1M1 1L11 11" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default DeleteIcon;
