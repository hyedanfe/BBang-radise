import PropTypes from 'prop-types';

EditIcon.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};

function EditIcon({ stroke, width }) {
  return (
    <svg width={width} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3483 5.34176L25.6516 10.6346M22.5983 3.09619C24.0628 1.6346 26.4372 1.6346 27.9016 3.09619C29.3661 4.55777 29.3661 6.92747 27.9016 8.38906L7.25002 29H2V23.6539L22.5983 3.09619Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditIcon;
