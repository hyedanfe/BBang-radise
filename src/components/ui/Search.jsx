import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '@assets/SearchIcon';

Search.propTypes = {
  onClick: PropTypes.func,
};

const FormStyle = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 10px 14px 8px 12px;
  outline: var(--gray-06) solid 1px;
  margin-left: 1px;
  display: flex;
  gap: 12px;
  align-items: center;

  &:focus,
  &:hover {
    outline: var(--primary-01) solid 3px;
    border: none;
  }
`;

const InputStyle = styled.input`
  flex-grow: 1;
  font-family: pretendard, sans-serif;
  outline: none;
  border: none;
  font-weight: 500;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--gray-08);

  &::placeholder {
    color: var(--gray-05);
    font-weight: 400;
  }
`;

function Search({ onClick }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <FormStyle>
      <InputStyle type="text" value={keyword} onChange={handleChange} placeholder="검색어를 입력하세요" />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onClick(keyword);
        }}
      >
        <SearchIcon stroke="var(--primary-01)" width="19px"></SearchIcon>
      </button>
    </FormStyle>
  );
}

export default Search;
