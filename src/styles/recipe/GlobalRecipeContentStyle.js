import { createGlobalStyle } from 'styled-components';
import { palette } from '@styles/colors';

const GlobalRecipeContentStyle = createGlobalStyle`
  ${palette}

  p strong{
    font-weight: 700;
  }

  p em{
    font-style: italic;
  }

  ol {
    display: block;
    list-style: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

ol li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
  list-style: inherit;
}

ul {
  display: block;
  list-style: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

ul li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
  list-style: inherit;
}

p img {
  width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 2%;
}
`;

export default GlobalRecipeContentStyle;
