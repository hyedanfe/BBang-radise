import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import { useForm } from 'react-hook-form';
import Button from '@components/ui/button/Button';
import Submit from '@components/ui/button/Submit';
import * as S from '@styles/signup/signup.style';

function Optional({ setStep, onSubmit }) {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });
  // const { register } = useFormContext();

  const onOptionalSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <S.SignUpForm onSubmit={handleSubmit(onOptionalSubmit)}>
        <div>
          <Input type="file" accept="image/*" id="profileImage" label="프로필 이미지" placeholder="이미지를 선택하세요" {...register('profileImage')} />
        </div>
        <div>
          <TextArea label="자기소개 (40자 이내)" type="txt" id="introduction" placeholder="자기소개를 입력해주세요" rows="5" {...register('introduction')} />
        </div>
        <div>
          <Button onClick={() => setStep(0)}>이전</Button>
        </div>
        <div>
          <Submit>회원가입</Submit>
        </div>
      </S.SignUpForm>
    </>
  );
}

export default Optional;
