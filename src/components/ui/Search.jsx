import { useState } from 'react';
import PropTypes from 'prop-types';
import Submit from '@components/ui/button/Submit';

Search.propTypes = {
  onClick: PropTypes.func,
};

function Search({ onClick }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form>
      <input type="text" value={keyword} onChange={handleChange} />
      <Submit
        onClick={(e) => {
          e.preventDefault();
          onClick(keyword);
        }}
      >
        검색
      </Submit>
    </form>
  );
}

export default Search;
