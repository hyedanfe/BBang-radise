import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Submit from '@components/ui/Submit';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import useUserApis from '@hooks/apis/useUserApis.mjs';
import useFileApis from '@hooks/apis/useFileApis.mjs';

function SignUp() {
  const navigate = useNavigate();
  const { postSignUp } = useUserApis();
  const { postSingleFile } = useFileApis();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      formData.type = 'seller';

      if (formData.profileImage.length > 0) {
        const fileRes = await postSingleFile(formData.profileImage[0]);

        formData.profileImage = fileRes.data.file.name;
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

  return (
    <div>
      <div>
        <div>
          <h2>회원가입</h2>
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
            <Input type="file" accept="image/*" id="profileImage" label="프로필 이미지" placeholder="이미지를 선택하세요" {...register('profileImage')} />
          </div>
          <div>
            <TextArea label="자기소개 (40자 이내)" type="txt" id="introduction" placeholder="자기소개를 입력해주세요" {...register('introduction')} />
          </div>
          <div>
            <Submit>회원가입</Submit>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
