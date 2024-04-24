import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import TextArea from '@components/ui/TextArea';
import Submit from '@components/ui/button/Submit';
import Button from '@components/ui/button/Button';
import * as S from '@styles/recipe/replyedit.style';

ReplyEdit.propTypes = {
  content: PropTypes.string,
  setEditMode: PropTypes.func,
  handleUpdate: PropTypes.func,
};

function ReplyEdit({ content, setEditMode, handleUpdate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: { content },
  });

  return (
    <S.ReplyEditContainer>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <TextArea
            {...register('content', {
              required: '내용을 입력하세요',
              minLength: {
                value: 2,
                message: '2글자 이상 입력하세요',
              },
            })}
            rows="3"
            placeholder="내용을 입력하세요."
          />

          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <S.ReplyEditButtonContainer>
          <Submit>수정</Submit>
          <Button onClick={() => setEditMode(false)}>취소</Button>
        </S.ReplyEditButtonContainer>
      </form>
    </S.ReplyEditContainer>
  );
}

export default ReplyEdit;
