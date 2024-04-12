import PropTypes from 'prop-types';

AddIcon.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};

function AddIcon({ stroke, width }) {
  return (
    <svg width={width} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 2V29M29 15.5L2 15.5" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default AddIcon;
