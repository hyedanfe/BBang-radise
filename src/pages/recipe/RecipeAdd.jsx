// import QuillApp from '@components/ui/QuillEditor/QuillApp';
import Input from '@components/ui/Input';
import QuillEditor from '@components/ui/QuillEditor/QuillEditor';
import Select from '@components/ui/Select';
import Text from '@components/ui/Text';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from '@styles/recipe/recipeadd.style';
import Section from '@components/ui/Section';

function RecipeAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axios = useCustomAxios();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    const res = await axios.post('/posts', formData);
    navigate(`/boards/${res.data.item._id}`);
  };

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
              {...register('title', {
                required: '제목을 입력하세요',
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
            <Input type="file" accept="image/*" id="mainImage" label="대표 이미지" />
          </div>
          <div className="input-content">
            <Text typography="semibold_s" display="block" color="gray08">
              레시피 내용
            </Text>
            <QuillEditor />
          </div>
        </form>
      </S.RecipeAddWrapper>
    </Section>
  );
}

export default RecipeAdd;
