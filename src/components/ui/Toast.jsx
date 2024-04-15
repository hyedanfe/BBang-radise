import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '@components/ui/Text';
import styled from 'styled-components';

const ToastStyle = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;
  z-index: 1;
  width: 300px;
  height: 64px;
  padding: 12px 20px;
  box-sizing: border-box;

  border-radius: 32px;
  box-shadow: 0px 4px 16px 0 0 4px 4px rgba(255, 107, 0, 0.7);
  background-color: var(--primary-01);
  color: var(--white);
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
    <ToastStyle>
      <Text>{text}</Text>
    </ToastStyle>
  );
}

export default Toast;
