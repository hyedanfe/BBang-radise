import { css } from 'styled-components';

// TODO: 메인컬러, 서브컬러 지정
export const palette = css`
  :root {
    --black: rgb(47, 40, 36);
    --gray-08: rgb(83, 71, 63);
    --gray-07: rgb(143, 130, 122);
    --gray-06: rgb(176, 168, 163);
    --gray-05: rgb(212, 204, 198);
    --gray-03: rgb(240, 236, 234);
    --gray-02: rgb(247, 247, 247);
    --white: rgb(251, 251, 251);
    --primary-01: rgb(255, 107, 0);
    --primary-02: rgb(85, 68, 57);
    --secondary-01: rgb(255, 181, 0);
    --secondary-02: rgb(67, 128, 64);
  }
`;

export const colors = {
  black: 'var(--black)',
  gray08: 'var(--gray-08)',
  gray07: 'var(--gray-07)',
  gray06: 'var(--gray-06)',
  gray05: 'var(--gray-05)',
  gray03: 'var(--gray-03)',
  gray02: 'var(--gray-02)',
  white: 'var(--white)',
  primary01: 'var(--primary-01)',
  primary02: 'var(--primary-02)',
  secondary01: 'var(--secondary-01)',
  secondary02: 'var(--secondary-02)',
};
