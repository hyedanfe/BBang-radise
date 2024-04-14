import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Text from '@components/ui/Text';
import styled from 'styled-components';

const SelectContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LabelStyle = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const SelectStyle = styled.select`
  width: 100%;
  border-radius: 6px;
  padding: 10px 12px 9px 12px;
  margin-left: 1px;
  font-family: pretendard, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--gray-08);
  outline: var(--gray-06) solid 1px;
  border: none;

  &:focus,
  &:hover {
    outline: var(--primary-01) solid 2px;
    border: none;
  }
`;

const Select = forwardRef(({ id, onChange, onBlur, name, label, optionData, ...rest }, ref) => {
  return (
    <SelectContainerStyle>
      <LabelStyle htmlFor={id}>
        <Text typography="semibold_m" display="block" color="gray08">
          {label}
        </Text>
      </LabelStyle>
      <SelectStyle id={id} name={name} aria-label={label} ref={ref} onChange={onChange} onBlur={onBlur} {...rest}>
        {optionData?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectStyle>
    </SelectContainerStyle>
  );
});

Select.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  optionData: PropTypes.arrayOf(PropTypes.object),
};

Select.displayName = 'Select';

export default Select;
