import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Text from '@components/ui/Text';
import styled from 'styled-components';

const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

const LabelStyle = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const InputStyle = styled.input`
  width: 100%;
  border-radius: 6px;
  padding: 10px 12px;
  margin-left: 1px;
  font-family: pretendard, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.5;

  &:focus,
  &:hover {
    outline: var(--primary-01) solid 2px;
    border: none;
  }

  &::placeholder {
    color: var(--gray-05);
  }
`;

const ErrorMessageStyle = styled.div`
  position: absolute;
  bottom: -23px;
  left: 2px;
`;

const Input = forwardRef(({ id, name, label, type, placeholder, error, ...rest }, ref) => {
  const errorOutline = error ? '2px solid var(--primary-01)' : 'inherit';
  const errorBoxshadow = error ? '0 0 4px 3px rgba(255, 107, 0, 0.7)' : 'inherit';
  const errorBorder = error ? 'none' : 'solid 1px var(--gray-06)';

  return (
    <InputContainerStyle>
      <div>
        {label && (
          <LabelStyle htmlFor={id}>
            <Text typography="semibold_m" display="block" color="gray08">
              {label}
            </Text>
          </LabelStyle>
        )}
        <InputStyle
          id={id}
          name={name}
          aria-label={label}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          style={{ outline: errorOutline, boxShadow: errorBoxshadow, border: errorBorder }}
        />
      </div>
      {error && (
        <ErrorMessageStyle>
          <Text color="primary01" display="block" typography="bold_s">
            {error}
          </Text>
        </ErrorMessageStyle>
      )}
    </InputContainerStyle>
  );
});

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  labelInside: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
