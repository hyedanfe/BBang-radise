import { forwardRef } from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

const Input = forwardRef(({ id, name, label, type, placeholder, error, ...rest }, ref) => {
  const errorColor = error ? 'red' : 'initial';
  return (
    <div>
      {label && (
        <label htmlFor={id} style={{ color: errorColor }}>
          {label}
        </label>
      )}
      <input id={id} name={name} aria-label={label} type={type} placeholder={placeholder} ref={ref} {...rest} style={{ borderColor: errorColor }} />
      {/* TODO: p요소 text로 바꾸기 여부*/}
      {error && <p style={{ color: errorColor }}>{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
