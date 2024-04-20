import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '@components/ui/Text';
import styled, { keyframes } from 'styled-components';

const ToastWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -14px;
  padding: 0 16px;
  position: fixed;
  width: 100%;
  /* bottom: 0px; */

  background: linear-gradient(0deg, rgba(255, 235, 168, 0.4), rgba(255, 255, 255, 0));

  z-index: 999;
  @media all and (min-width: 768px) {
    margin: 0 -70px;
  }
`;

const gradient = keyframes`
0% {
  background-position: 100% 50%;
  
}
100% {
  background-position: 10% 100%;
}
`;

const ToastStyle = styled.div`
  display: flex;
  z-index: 1;
  margin-top: 30px;
  padding: 12px 26px;
  box-sizing: border-box;
  position: relative;
  backdrop-filter: blur(1px);

  bottom: 18px;
  border-radius: 32px;
  background: linear-gradient(320deg, #fff5e1, #ffeba8, #ffb500);
  background-size: 400% 400%;
  animation: ${gradient} 3s ease infinite;
  box-shadow: 2px 3px 6px 4px rgba(179, 179, 179, 0.5);
  border: solid 3px rgba(255, 255, 255, 0.25);

  @media all and (min-width: 768px) {
    bottom: 24px;
    padding: 9px 50px;
  }
`;

Toast.propTypes = {
  setToast: PropTypes.func,
  text: PropTypes.string,
};

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastWrapper>
      <ToastStyle>
        <Text color="black" typography="semibold_m">
          {text}
        </Text>
      </ToastStyle>
    </ToastWrapper>
  );
}

export default Toast;
