import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Submit from '@components/ui/button/Submit';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import Button from '@components/ui/button/Button';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import Select from '@components/ui/Select';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

// TODO: 이미지 파일 여러개 넣는 api 만들기, select option 생각해보기, 파일 미리보기 공동 컴포넌트
function ClassAdd() {
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const { postSingleFile } = useFileApis();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (formData) => {
    try {
      console.log(formData);

      if (formData.mainImage.length > 0) {
        const fileRes = await postSingleFile(formData.mainImage[0]);
        console.log(fileRes);
        formData.mainImage = fileRes.data.item[0].name;
      } else {
        delete formData.mainImage;
      }

      if (formData.detailImage.length > 0) {
        const fileRes = await postSingleFile(formData.detailImage[0]);
        console.log(fileRes);
        formData.detailImage = fileRes.data.item[0].name;
      } else {
        delete formData.detailImage;
      }

      const res = await axios.post(`seller/products`, formData);
      navigate(`/class/${res?.data.item._id}`);
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
    <Section>
      <Text typography="display_l">베이킹 클래스 모집하기</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="file" accept="image/*" id="mainImage" label="대표 이미지 (1개)" placeholder="이미지를 선택하세요" {...register('mainImage')} />
        </div>
        <div>
          <Input type="file" accept="image/*" id="detailImage" label="상세 이미지 (최대 10개)" placeholder="이미지를 선택하세요" {...register('detailImage')} />
        </div>
        <div>
          <Input
            type="text"
            id="name"
            label="제목 (30자 이내)"
            height="40px"
            placeholder="제목을 입력하세요"
            error={errors.name && errors.name.message}
            {...register('name', {
              required: '제목을 입력하세요.',
              minLength: {
                value: 2,
                message: '제목을 2자 이상 입력하세요.',
              },
              maxLength: {
                value: 30,
                message: '제목을 30자 이내 입력하세요.',
              },
            })}
          />
        </div>
        <div>
          <Input
            type="date"
            id="classAt"
            label="클래스 일자"
            placeholder="연/월/일"
            error={errors.classAt && errors.classAt.message}
            {...register('classAt', {
              required: '클래스 일자를 입력하세요.',
            })}
          />
          <Input
            type="date"
            id="startAt"
            label="모집 시작일"
            placeholder="연/월/일"
            error={errors.startAt && errors.startAt.message}
            {...register('startAt', {
              required: '모집 시작일을 입력하세요.',
            })}
          />
          <Input
            type="date"
            id="endAt"
            label="모집 종료일"
            placeholder="연/월/일"
            error={errors.endAt && errors.endAt.message}
            {...register('endAt', {
              required: '모집 종료일을 입력하세요.',
            })}
          />
          <Input
            type="text"
            id="address"
            label="클래스 장소"
            height="40px"
            placeholder="클래스 장소를 입력하세요"
            error={errors.address && errors.address.message}
            {...register('address', {
              required: '클래스 장소를 입력하세요.',
              minLength: {
                value: 2,
                message: '클래스 장소를 2자 이상 입력하세요.',
              },
            })}
          />
          <Input
            type="quantity"
            id="quantity"
            label="클래스 참여 인원"
            height="40px"
            placeholder="인원을 선택해주세요"
            defaultValue="20"
            error={errors.quantity && errors.quantity.message}
            {...register(
              'quantity',
              // , {
              //   required: '인원을 선택해주세요.',
              // }
            )}
          />
        </div>
        <Input
          type="number"
          id="price"
          label="클래스 참여 비용"
          height="40px"
          placeholder="참여 비용을 입력하세요"
          error={errors.price && errors.price.message}
          {...register('price', {
            required: '참여 비용을 입력하세요.',
          })}
        />
        <div>
          <TextArea
            label="클래스 세부 내용"
            type="txt"
            id="content"
            placeholder="텍스트를 입력해주세요"
            {...register('content', {
              required: '클래스 세부 내용을 입력하세요.',
              minLength: {
                value: 10,
                message: '클래스 세부 내용을 10자 이상 입력하세요.',
              },
            })}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            취소하기
          </Button>
        </div>

        <div>
          <Submit>개설하기</Submit>
        </div>
      </form>
    </Section>
  );
}

export default ClassAdd;
