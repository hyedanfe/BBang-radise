import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@components/ui/Text';

const TextareaContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LabelStyle = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const TextareaStyle = styled.textarea`
  width: calc(100% - 2px);
  border-radius: 6px;
  padding: 10px 12px 9px 12px;
  margin-left: 1px;
  font-family: pretendard, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.3;
  color: var(--gray-08);
  outline: var(--gray-06) solid 1px;
  border: none;

  &:focus,
  &:hover {
    outline: var(--primary-01) solid 2px;
    border: none;
  }

  &::placeholder {
    color: var(--gray-05);
    font-weight: 400;
  }
`;

const ErrorMessageStyle = styled.div`
  position: absolute;
  bottom: -23px;
  left: 2px;
`;

const TextArea = forwardRef(({ id, label, name, value, placeholder, isValid, validateText, onChange, onBlur, rows, ...rest }, ref) => {
  return (
    <TextareaContainerStyle>
      {label && (
        <LabelStyle htmlFor={id}>
          <Text typography="semibold_s" display="block" color="gray08">
            {label}
          </Text>
        </LabelStyle>
      )}
      <TextareaStyle
        id={id}
        name={name}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        onBlur={onBlur}
        style={{ boxShadow: isValid ? '0 0 4px 4px rgba(255, 107, 0, 0.7)' : 'none' }}
        onChange={onChange}
        rows={rows}
        {...rest}
        ref={ref}
      />
      {!isValid && (
        <ErrorMessageStyle>
          <Text color="primary01" display="block" typography="bold_s">
            {validateText}
          </Text>
        </ErrorMessageStyle>
      )}
    </TextareaContainerStyle>
  );
});

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  validateText: PropTypes.string,
  rows: PropTypes.string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
