import Input from '@components/ui/Input';
import QuillEditor from '@components/ui/QuillEditor/QuillEditor';
import Select from '@components/ui/Select';
import Text from '@components/ui/Text';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from '@styles/recipe/recipeadd.style';
import Section from '@components/ui/Section';
import Submit from '@components/ui/button/Submit';
import Button from '@components/ui/button/Button';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import { useEffect, useState } from 'react';

function RecipeAdd() {
  const [quillValue, setquillValue] = useState();
  const { postSingleFile } = useFileApis();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const axios = useCustomAxios();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      formData.type = 'recipe';
      console.log(formData);

      if (formData.extra.length > 0) {
        // console.log(formData);
        const fileRes = await postSingleFile(formData.extra[0]);
        console.log(fileRes);
        formData.extra = fileRes.data.item[0].name;
      } else {
        delete formData.extra;
      }

      const res = await axios.post('/posts', formData);
      navigate(`/recipe/${res.data.item._id}`);
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

  useEffect(() => {
    console.log('퀼:' + quillValue);
  }, [quillValue]);

  return (
    <Section>
      <S.RecipeAddWrapper>
        <Text color="black" display="block" typography="display_l">
          베이킹 레시피 등록하기
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-title">
            <Input
              id="title"
              type="text"
              label="제목 (30자 이내)"
              placeholder="제목을 입력하세요"
              error={errors.title && errors.title.message}
              {...register('title', {
                required: '제목을 입력해주세요',
                maxLength: {
                  value: 30,
                  message: '제목은 30자 이내로 입력 가능합니다',
                },
              })}
            />
          </div>
          <div className="select-category">
            <Select id="category" label="카테고리" placeholder="레시피 카테고리를 선택해주세요" />
          </div>
          <div className="upload-mainimage">
            <Input type="file" accept="image/*" id="extra" label="대표 이미지" {...register('extra')} />
          </div>
          <div className="input-content">
            <Text typography="semibold_s" display="block" color="gray08">
              레시피 내용
            </Text>
            <QuillEditor
              id="content"
              name="content"
              values={quillValue}
              setValues={setquillValue}
              {...register('content', {
                required: '내용을 입력해주세요',
              })}
            />
            {/* <Input type="text" id="content" label="레시피 내용" {...register('content', { required: '내용을 입력해주세요' })} /> */}
          </div>
          <Button color="var(--gray-06)" onClick={() => navigate('/recipe')}>
            취소하기
          </Button>
          <Submit>등록하기</Submit>
        </form>
      </S.RecipeAddWrapper>
    </Section>
  );
}

export default RecipeAdd;
