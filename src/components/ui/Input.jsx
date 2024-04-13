import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Text from '@components/ui/Text';

const Input = forwardRef(({ id, typography, name, label, type, placeholder, error, ...rest }, ref) => {
  const errorColor = error ? 'red' : 'initial';

  return (
    <div>
      <div>
        {label && (
          <label htmlFor={id} style={{ color: errorColor }}>
            <Text typography={typography}>{label}</Text>
          </label>
        )}
        <input id={id} name={name} aria-label={label} type={type} placeholder={placeholder} ref={ref} {...rest} style={{ borderColor: errorColor }} />
      </div>
      {/* TODO: p요소 text로 바꾸기 여부*/}
      {error && <p style={{ color: errorColor }}>{error}</p>}
    </div>
  );
});

Input.propTypes = {
  id: PropTypes.string.isRequired,
  typography: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  labelInside: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
