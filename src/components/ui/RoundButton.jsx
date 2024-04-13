import AddIcon from '@assets/AddIcon';
import styled from 'styled-components';

const RoundButtonStyle = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 200px;
  position: fixed;
  bottom: 18px;
  right: 15px;
  background-color: ${(props) => (props.disabled ? 'var(--gray-05)' : 'var(--primary-02)')};
  box-shadow: 2px 3px 8px 1px rgba(0, 0, 0, 0.55);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 5px rgba(85, 68, 57, 0.7);
  }

  @media all and (min-width: 768px) {
    width: 77px;
    height: 77px;
    bottom: 23px;
    right: 24px;
  }
`;

const IconDiv = styled.div`
  margin: 17px;
  @media all and (min-width: 768px) {
    margin: 22px;
  }
`;

function RoundButton({ ...rest }) {
  return (
    <RoundButtonStyle {...rest}>
      <IconDiv>
        <AddIcon stroke="var(--white)"></AddIcon>
      </IconDiv>
    </RoundButtonStyle>
  );
}

export default RoundButton;
