import DeleteIcon from '@assets/DeleteIcon';
import styled from 'styled-components';

const CommentDeleteButtonStyle = styled.button`
  width: 100%;
`;

function CommentDeleteButton({ type = 'button', width, onClick }) {
  return (
    <>
      <CommentDeleteButtonStyle type={type} onClick={onClick}>
        <DeleteIcon stroke="var(--gray-06)" width={width}></DeleteIcon>
      </CommentDeleteButtonStyle>
    </>
  );
}

export default CommentDeleteButton;
