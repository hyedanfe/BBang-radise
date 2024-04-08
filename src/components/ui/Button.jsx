import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const Button = ({ children, type = 'button', ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
