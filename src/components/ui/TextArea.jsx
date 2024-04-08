import { forwardRef } from 'react';
import PropTypes from 'prop-types';

TextArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  validateText: PropTypes.string,
};

const TextArea = forwardRef(({ labelText, name, value, placeholder, onBlur, onChange, isValid, validateText, ...rest }, ref) => {
  return (
    <div>
      <label>{labelText}</label>
      <textarea name={name} value={value} placeholder={placeholder} onBlur={onBlur} onChange={onChange} style={{ borderColor: isValid ? 'initial' : 'red' }} {...rest} ref={ref} />
      {/* TODO: p요소 text로 바꾸기 여부*/}
      {!isValid && <p style={{ color: 'red' }}>{validateText}</p>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
