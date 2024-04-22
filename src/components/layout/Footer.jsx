import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;

  padding: 20px;
  padding-right: 100px;
  padding-top: 270px;
  margin-top: 100px;
  background: linear-gradient(to top, var(--secondary-04) 0%, rgba(255, 255, 255, 0) 100%);

  @media all and (min-width: 768px) {
    padding: 50px;
  }
`;

const FooterContent = styled.div`
  font-family: pretendard, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--gray-08);

  & span {
    font-weight: 400;
  }

  & a {
    text-decoration: var(--secondary-02) wavy underline;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <span>ⓒ 2024. BBangradise All rights reserved </span>
        <br />
        <br />
        이 홈페이지는 멋쟁이 사자처럼 프론트엔드 스쿨 9기 수료 과정을 시작으로 개발되었습니다.
        <br />
        <br />
        빵라다이스는 &nbsp;
        <a href="https://github.com/dohehehe" target="_blank">
          곽도희
        </a>
        &nbsp;
        <a href="https://github.com/C5D2" target="_blank">
          김나라
        </a>
        &nbsp;
        <a href="https://github.com/hyedanfe" target="_blank">
          서혜단
        </a>
        이 기획부터 디자인, 개발 그리고 배포를 진행한 프로젝트입니다. <br />
        프로젝트 &nbsp;
        <a href="https://github.com/FRONTENDSCHOOL9/BBang-radise" target="_blank">
          깃허브 페이지
        </a>
        에서 빵라다이스에 대한 보다 자세한 내용들을 찾아보실 수 있습니다.
        <br />
        <br />
        프로젝트에 대한 궁금한 사항이나 다양한 제안과 연락은 빵라다이스 멤버들에게 문의주세요.
        <br /> <br />
        언제나 환영합니다!
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
