import PropTypes from 'prop-types';

AddImageIcon.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};

function AddImageIcon({ stroke, width }) {
  return (
    <svg width={width} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 9V16M16 12.5H9M23 12.5C23 13.8789 22.7284 15.2443 22.2007 16.5182C21.6731 17.7921 20.8996 18.9496 19.9246 19.9246C18.9496 20.8996 17.7921 21.6731 16.5182 22.2007C15.2443 22.7284 13.8789 23 12.5 23C11.1211 23 9.75574 22.7284 8.48182 22.2007C7.20791 21.6731 6.05039 20.8996 5.07538 19.9246C4.10036 18.9496 3.32694 17.7921 2.79926 16.5182C2.27159 15.2443 2 13.8789 2 12.5C2 9.71523 3.10625 7.04451 5.07538 5.07538C7.04451 3.10625 9.71523 2 12.5 2C15.2848 2 17.9555 3.10625 19.9246 5.07538C21.8938 7.04451 23 9.71523 23 12.5Z"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddImageIcon;
