import Text from '@components/ui/Text';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeMobileIcon from '@assets/HomeMobileIcon.svg';
import HomeWebIcon from '@assets/HomeWebIcon.svg';
import { useEffect, useState } from 'react';

function Header() {
  const Header = styled.header`
    display: flex;
    position: fixed;
    width: 100vw;
    padding: 20px 17px 0px 19px;
    align-items: center;
    gap: 16px;

    @media all and (min-width: 768px) {
      padding: 20px 33px 0px 33px;
      gap: 30px;
    }
  `;

  const LogoLayout = styled.div`
    padding-top: 2px;
    @media all and (min-width: 768px) {
      padding-top: 5px;
    }
  `;

  const Navigation = styled.nav`
    display: flex;
    height: 42px;
    flex-grow: 1;
    justify-content: space-between;
    backdrop-filter: blur(3px);
    padding: 3.5px 32px 0px 32px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    border: solid 1px rgba(255, 255, 255, 0.25);
    transition: all 0.4s ease-in-out;

    @media all and (min-width: 768px) {
      justify-content: flex-end;
      height: 56px;
      padding: 7px 34px 0px 34px;
      gap: 60px;

      &:hover {
        background-color: var(--primary-01);
      }
    }
  `;

  const StyledNavLink = styled(NavLink)`
    &.active {
      &:after {
        content: '';
        display: block;
        background-color: black;
        width: 100%;
        height: 1.3px;
      }
    }
  `;

  const [isMobile, setIsMobile] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Header>
      <Link to="/">
        <LogoLayout>{isMobile < 768 ? <img src={HomeMobileIcon} /> : <img src={HomeWebIcon} />}</LogoLayout>
      </Link>
      <Navigation>
        <li>
          <StyledNavLink to="/login">
            <Text typography="display_m">로그인</Text>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/class">
            <Text color="black" typography="display_m">
              클래스
            </Text>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/recipe">
            <Text color="black" typography="display_m">
              레시피
            </Text>
          </StyledNavLink>
        </li>
      </Navigation>
    </Header>
  );
}

export default Header;
