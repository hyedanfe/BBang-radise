import { useParams, useNavigate } from 'react-router-dom';
import { useGetUserInfo } from '@hooks/queries/user';
import Button from '@components/ui/Button';
import useMemberStore from '@zustand/memberStore.mjs';
import { useForm } from 'react-hook-form';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import Submit from '@components/ui/Submit';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import { useEffect } from 'react';

function MyPageEdit() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { data } = useGetUserInfo(_id);
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
  const item = data?.item || [];
  console.log(item);
  const setUserData = useMemberStore((state) => state.setUser);

  useEffect(() => {
    if (item) {
      reset({
        name: item.name,
        email: item.email,
        password: item.password,
        introduction: item.introduction,
      });
    }
  }, [item]);

  const onSubmit = async (formData) => {
    try {
      await patchUserInfo(formData);
      alert('회원정보 수정에 성공하였습니다.');
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

  const handleLogout = () => {
    setUserData(null);
    navigate('/');
  };

  return (
    <>
      <div>
        <div>
          <div>
            <h2>내 정보 수정</h2>
          </div>
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
              <Input type="email" id="email" label="이메일" placeholder="이메일을 입력하세요" error={errors.email && errors.email.message} {...register('email')} disabled />
            </div>
            <div>
              <img src="" alt="" />
            </div>
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
        </div>
      </div>
      <Button onClick={handleLogout}>로그아웃</Button>
    </>
  );
}

export default MyPageEdit;
