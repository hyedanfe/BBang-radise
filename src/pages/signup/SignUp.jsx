import { useForm } from 'react-hook-form';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useNavigate } from 'react-router-dom';
import Submit from '@components/ui/Submit';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';

function SignUp() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      formData.type = 'seller';

      console.log(formData);

      // 이미지 먼저 업로드
      if (formData.profileImage.length > 0) {
        // 프로필 이미지를 추가한 경우
        const imageFormData = new FormData();
        imageFormData.append('attach', formData.profileImage[0]);

        const fileRes = await axios('/files', {
          method: 'post',
          headers: {
            // 파일 업로드시 필요한 설정
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });

        // 서버로부터 응답받은 이미지 이름을 회원 정보에 포함
        formData.profileImage = fileRes.data.file.name;
      } else {
        // profileImage 속성을 제거
        delete formData.profileImage;
      }

      const res = await axios.post('/users', formData);
      // alert(res.data.item.name + '님 회원가입이 완료 되었습니다.\n로그인 후에 이용하세요.');
      navigate('/signup-alert', { state: { user: res.data.item } });
    } catch (err) {
      // AxiosError(네트워크 에러-response가 없음, 서버의 4xx, 5xx 응답 상태 코드를 받았을 때-response 있음)
      if (err.response?.data.errors) {
        // API 서버가 응답한 에러
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
