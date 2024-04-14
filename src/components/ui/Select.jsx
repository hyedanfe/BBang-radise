import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Text from '@components/ui/Text';

const Select = forwardRef(({ id, typography, onChange, onBlur, name, label, optionData, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>
        <Text typography={typography}>{label}</Text>
      </label>
      <select id={id} name={name} aria-label={label} ref={ref} onChange={onChange} onBlur={onBlur} {...rest}>
        {optionData.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

Select.propTypes = {
  id: PropTypes.string.isRequired,
  typography: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  optionData: PropTypes.arrayOf(PropTypes.object),
};

Select.displayName = 'Select';

export default Select;
