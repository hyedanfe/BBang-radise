import EditIcon from '@assets/EditIcon';
import styled from 'styled-components';

const CommentEditButtonStyle = styled.button`
  width: 100%;
`;

function CommentEditButton() {
  return (
    <>
      <CommentEditButtonStyle>
        <EditIcon stroke="var(--primary-01)" strokeWidth="4.4px"></EditIcon>
      </CommentEditButtonStyle>
    </>
  );
}

export default CommentEditButton;
