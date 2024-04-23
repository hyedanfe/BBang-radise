import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import TextArea from '@components/ui/TextArea';
import Submit from '@components/ui/button/Submit';
import * as S from '@styles/recipe/replyadd.style';

function ReplyAdd() {
  const { _id } = useParams();
  const axios = useCustomAxios();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const addReply = useMutation({
    mutationFn: (formData) => axios.post(`/posts/${_id}/replies`, formData),
    onSuccess() {
      // queryFn이 성공을(2xx 응답 상태 코드) 응답 받을 경우 호출되는 콜백 합수
      // 기존 캐시 무효화
      queryClient.invalidateQueries(['posts', _id, 'replies']);

      reset();
    },
  });

  const onSubmit = (formData) => {
    // await axios.post(`/posts/${ _id }/replies`, formData);
    // fetchList();
    // reset();
    addReply.mutate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.ReplyInput>
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
        </S.ReplyInput>
        <Submit>댓글 등록</Submit>
      </form>
    </div>
  );
}

export default ReplyAdd;
