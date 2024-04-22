import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useMemberStore from '@zustand/memberStore.mjs';
import Input from '@components/ui/Input';
import Button from '@components/ui/button/Button';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import Section from '@components/ui/Section';
import * as S from '@styles/login/login.style';
import Text from '@components/ui/Text';
import Modal from '@components/ui/Modal';
import { useModalStore } from '@zustand/modalStore.mjs';
import Toast from '@components/ui/Toast';
import { useState } from 'react';

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { postLogin } = useUserApis();
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: '',
  });

  // zustand setter 반환
  const setUserData = useMemberStore((state) => state.setUser);
  const toggleModal = useModalStore((state) => state.toggleModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    values: {
      email: 'GD@market.com',
      password: '11111111',
    },
  });

  // const showErrorToast = (error) => {
  //   setToast({ show: true, message: error.msg, type: 'error' });
  // };

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const res = await postLogin(formData);
      console.log(res);

      // 사용자 정보를 zustand에 저장
      setUserData({
        _id: res.data.item._id,
        name: res.data.item.name,
        profile: res.data.item.profileImage,
        token: res.data.item.token,
      });
      toggleModal();
      setToast({ show: true, message: `${res.data.item.name}님 로그인 되었습니다.` });
      setTimeout(() => {
        navigate(location.state?.from ? location.state?.from : '/');
      }, 1000);
    } catch (err) {
      console.log(err);
      // AxiosError(네트워크 에러-response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때-response 있음)
      if (err.response?.data.errors) {
        // API 서버가 응답한 에러
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        toggleModal();
        setToast({ show: true, message: err.response?.data.message });
      }
    }
  };

  return (
    <Section>
      <S.LoginWrapper>
        <Text typography="display_l">로그인</Text>
        {toast.show && <Toast setToast={setToast} text={toast.message} />}
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button color="var(--gray-07)" onClick={toggleModal}>
              로그인
            </Button>
            <Modal handleSubmit={handleSubmit} contentText="로그인하시겠습니까?" submitText="예" closeText="아니오" />
            <Button
              type="button"
              color="var(--primary-01)"
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </Button>
          </div>
        </form>
      </S.LoginWrapper>
    </Section>
  );
}

export default Login;
