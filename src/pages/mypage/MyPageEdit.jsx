import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import Button from '@components/ui/button/Button';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import Submit from '@components/ui/button/Submit';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import * as S from '@styles/mypage/mypage.style';

function MyPageEdit() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { patchUserInfo } = useUserApis();
  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      introduction: '',
    },
  });

  const location = useLocation();
  const user = location.state?.user;

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        password: user.password,
        introduction: user.introduction,
      });
    }
  }, [user]);

  const onSubmit = async (formData) => {
    try {
      await patchUserInfo(_id, formData);
      alert('회원정보 수정에 성공하였습니다.');
    } catch (err) {
      console.log(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    }
  };

  return (
    <Section>
      <S.MyPageWrapper>
        {user && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="text"
                id="name"
                label="이름"
                height="40px"
                typography="semibold_m"
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
              <Input type="email" id="email" label="이메일" placeholder="이메일을 입력하세요" error={errors.email && errors.email.message} {...register('email')} disabled />
            </div>
            <div>
              <Text typography="semibold_m">프로필 이미지</Text>
            </div>
            <S.EditProfileImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profileImage}`} alt="프로필 이미지" />
            <div>
              <TextArea label="자기소개 (40자 이내)" type="txt" id="introduction" placeholder="자기소개를 입력해주세요" {...register('introduction')} />
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
              >
                수정 취소
              </Button>
            </div>
            <div>
              <Submit>수정 완료</Submit>
            </div>
          </form>
        )}
      </S.MyPageWrapper>
    </Section>
  );
}

export default MyPageEdit;
