import Text from '@components/ui/Text';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalInner = styled.div`
  width: 315px;
  height: 163px;
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
`;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  handleConfirmClick: PropTypes.func,
  contentText: PropTypes.string,
  confirmText: PropTypes.string,
  closeText: PropTypes.string,
};

function Modal({ isOpen, handleModalToggle, contentText, handleConfirmClick, confirmText, closeText }) {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalBackground>
        <ModalInner>
          <Text typography="semibold_l">{contentText}</Text>
          {confirmText && <button onClick={handleConfirmClick}>{confirmText}</button>}
          {closeText && <button onClick={handleModalToggle}>{closeText}</button>}
        </ModalInner>
      </ModalBackground>
    </ModalWrapper>
  );
}

export default Modal;
