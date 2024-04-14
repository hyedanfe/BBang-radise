import PropTypes from 'prop-types';

SearchIcon.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};

function SearchIcon({ stroke, width }) {
  return (
    <svg width={width} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 18L12.6667 12.6667M14.4444 8.22222C14.4444 11.6587 11.6587 14.4444 8.22222 14.4444C4.78578 14.4444 2 11.6587 2 8.22222C2 4.78578 4.78578 2 8.22222 2C11.6587 2 14.4444 4.78578 14.4444 8.22222Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
