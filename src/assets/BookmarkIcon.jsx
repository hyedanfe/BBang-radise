import PropTypes from 'prop-types';

BookmarkIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  width: PropTypes.string,
};

function BookmarkIcon({ fill, stroke, width }) {
  return (
    <svg width={width} viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.7862 24.4585L1.5 29.4829V3.55556C1.5 2.30663 2.40877 1.5 3.28571 1.5H19.7143C20.5912 1.5 21.5 2.30663 21.5 3.55556V29.4829L12.2138 24.4585C11.7684 24.2175 11.2316 24.2175 10.7862 24.4585Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BookmarkIcon;
