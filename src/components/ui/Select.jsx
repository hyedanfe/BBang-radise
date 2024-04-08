import { forwardRef } from 'react';
import PropTypes from 'prop-types';

Select.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  optionData: PropTypes.arrayOf(PropTypes.object),
};

const Select = forwardRef(({ onChange, onBlur, name, label, optionData, ...rest }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} {...rest}>
        {optionData.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
