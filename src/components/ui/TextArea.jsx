import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextArea = forwardRef(({ id, label, name, value, placeholder, onBlur, onChange, isValid, validateText, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
        {...rest}
        ref={ref}
      />
      {/* TODO: p요소 text로 바꾸기 여부*/}
      {!isValid && <p style={{ color: 'red' }}>{validateText}</p>}
    </div>
  );
});

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  validateText: PropTypes.string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
