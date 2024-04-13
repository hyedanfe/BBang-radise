import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Submit from '@components/ui/button/Submit';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import Button from '@components/ui/button/Button';
import { useState } from 'react';
import Section from '@components/ui/Section';
import * as S from '@styles/signup/signup.style';
import Text from '@components/ui/Text';

function SignUp() {
  const [emailMsg, setEmailMsg] = useState('');
  const navigate = useNavigate();
  const { postSignUp, getEmailVerify } = useUserApis();
  const { postSingleFile } = useFileApis();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { email } = watch();

  const onSubmit = async (formData) => {
    try {
      formData.type = 'seller';
      console.log(formData);

      if (formData.profileImage.length > 0) {
        const fileRes = await postSingleFile(formData.profileImage[0]);
        console.log(fileRes);
        formData.profileImage = fileRes.data.item[0].name;
      } else {
        delete formData.profileImage;
      }

      const res = await postSignUp(formData);
      navigate('/signup-alert', { state: { user: res.data.item } });
    } catch (err) {
      console.log(err);
      // AxiosError(네트워크 에러-response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때-response 있음)
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    }
  };

  const checkDuplicateEmail = async () => {
    try {
      const res = await getEmailVerify(email);
      if (res.status === 200) {
        setEmailMsg('회원가입 가능한 이메일입니다.');
      }
    } catch (err) {
      setEmailMsg(err.response?.data.message);
    }
  };

  return (
    <Section>
      <S.SignUpWrapper>
        <Text typography="display_l">회원가입</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="text"
              id="name"
              label="이름"
              height="40px"
              placeholder="이름을 입력하세요"
              error={errors.name && errors.name.message}
              {...register('name', {
                required: '이름을 입력하세요.',
                minLength: {
                  value: 2,
                  message: '이름을 2글자 이상 입력하세요.',
                },
              })}
            />
          </div>
          <div>
            <Input
              type="email"
              id="email"
              label="이메일"
              placeholder="이메일을 입력하세요"
              error={errors.email && errors.email.message}
              {...register('email', {
                required: '이메일을 입력하세요.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '이메일 형식이 아닙니다.',
                },
              })}
            />
          </div>
          <div>
            {emailMsg && <span>{emailMsg}</span>}
            <Button disabled={email === '' || errors.email ? true : false} onClick={checkDuplicateEmail}>
              중복확인
            </Button>
          </div>
          <div>
            <Input
              type="password"
              id="password"
              label="비밀번호"
              placeholder="비밀번호를 입력하세요"
              error={errors.password && errors.password.message}
              {...register('password', {
                required: '비밀번호를 입력하세요.',
              })}
            />
          </div>
          <div>
            <Input type="file" accept="image/*" id="profileImage" label="프로필 이미지" placeholder="이미지를 선택하세요" {...register('profileImage')} />
          </div>
          <div>
            <TextArea label="자기소개 (40자 이내)" type="txt" id="introduction" placeholder="자기소개를 입력해주세요" {...register('introduction')} />
          </div>
          <div>
            <Submit>회원가입</Submit>
          </div>
        </form>
      </S.SignUpWrapper>
    </Section>
  );
}

export default SignUp;
