import DeleteIcon from '@assets/DeleteIcon';
import styled from 'styled-components';

const CommentDeleteButtonStyle = styled.button`
  width: 100%;
`;

function CommentDeleteButton() {
  return (
    <>
      <CommentDeleteButtonStyle>
        <DeleteIcon stroke="var(--gray-06)" strokeWidth="4.4px"></DeleteIcon>
      </CommentDeleteButtonStyle>
    </>
  );
}

export default CommentDeleteButton;
