import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Select = forwardRef(({ id, onChange, onBlur, name, label, optionData, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
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
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  optionData: PropTypes.arrayOf(PropTypes.object),
};

Select.displayName = 'Select';

export default Select;
