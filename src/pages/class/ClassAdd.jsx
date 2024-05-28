import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '@components/ui/Input';
import TextArea from '@components/ui/TextArea';
import useFileApis from '@hooks/apis/useFileApis.mjs';
import Button from '@components/ui/button/Button';
import Section from '@components/ui/Section';
import Text from '@components/ui/Text';
import Select from '@components/ui/Select';
import * as S from '@styles/class/class.style';
import DefaultImagePreview from '@assets/DefaultImagePreview.png';
import { useEffect, useState } from 'react';
import useClassApis from '@hooks/apis/useClassApis.mjs';
import Modal from '@components/ui/Modal';
import { useModalStore } from '@zustand/modalStore.mjs';
import Toast from '@components/ui/Toast';

function ClassAdd() {
  const navigate = useNavigate();
  const { postSingleFile, postMultipleFiles } = useFileApis();
  const { postClass } = useClassApis();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mainImages: '',
      name: '',
      quantity: '',
      price: '',
      content: '',
      extra: {
        detailImages: [],
        classAt: '',
        startAt: '',
        endAt: '',
        address: '',
      },
    },
    mode: 'onChange',
  });

  const [mainImagesPreview, setMainImagesPreview] = useState('');
  const [detailImagesPreview, setDetailImagesPreview] = useState([]);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: '',
  });

  const optionData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((number) => ({
    value: number,
    label: number,
  }));

  const mainImages = watch('mainImages');
  const detailImages = watch('extra.detailImages');

  useEffect(() => {
    if (mainImages && mainImages.length > 0) {
      const file = mainImages[0];
      setMainImagesPreview(URL.createObjectURL(file));
    }
  }, [mainImages]);

  useEffect(() => {
    if (detailImages && detailImages.length > 0) {
      const selectedFiles = [...detailImages].slice(0, 10);
      const files = selectedFiles.map((file) => URL.createObjectURL(file));
      setDetailImagesPreview(files);
    }
  }, [detailImages]);

  const renderImageArray = [...detailImagesPreview, ...Array(10 - detailImagesPreview.length).fill(DefaultImagePreview)];

  const onSubmit = async (formData) => {
    try {
      console.log(formData);

      if (formData.mainImages.length > 0) {
        const fileRes = await postSingleFile(formData.mainImages[0]);
        console.log(fileRes);
        formData.mainImages = fileRes.data.item;
      } else {
        delete formData.mainImages;
      }

      if (formData.extra.detailImages.length > 0) {
        const fileRes = await postMultipleFiles(formData.extra.detailImages);
        console.log(detailImages);
        console.log(fileRes);
        formData.extra.detailImages = fileRes.data.item.map((item) => item);
      } else {
        delete formData.extra.detailImages;
      }

      const res = await postClass(formData);
      toggleModal();
      navigate(`/class/${res?.data.item._id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach((error) => setError(error.path, { message: error.msg }));
      } else if (err.response?.data.message) {
        setToast({ show: true, message: err.response?.data.message });
      }
    }
  };

  return (
    <Section>
      <S.ClassAddWrapper>
        <S.ClassFormText>
          <Text typography="display_l">베이킹 클래스 등록하기</Text>
          {toast.show && <Toast setToast={setToast} text={toast.message} />}
          <Text typography="light_l" color="black" display="block">
            마스터님의 베이킹 클래스를 기다리고 있는 주민들이 있습니다. 마스터님이 보유하고 계신 레시피를 공유해주세요!.
          </Text>
          <S.ClassFormButton>
            <Button color="var(--primary-01)" onClick={toggleModal}>
              개설하기
            </Button>
            <div>
              <Button
                color="var(--gray-06)"
                onClick={() => {
                  navigate(-1);
                }}
              >
                취소하기
              </Button>
            </div>
          </S.ClassFormButton>
        </S.ClassFormText>

        <S.ClassFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Modal handleSubmit={handleSubmit} contentText="개설하시겠습니까?" submitText="예" closeText="아니오" />

          <div>
            <Input
              type="file"
              accept="image/*"
              id="mainImages"
              label="대표 이미지 (1개)"
              placeholder="이미지를 선택하세요"
              {...register('mainImages', {
                required: '대표 이미지를 등록해주세요.',
              })}
            />

            <S.FileInputBoxStyle>
              {mainImagesPreview && mainImagesPreview.length > 0 ? (
                <S.PreviewImageWrapper>
                  <S.PreviewImageStyle src={mainImagesPreview} className="hidden" width="160" height="160" alt="main_image" />
                  {/* <S.DeleteButtonWrapper>
                      <S.DeleteButtonStyle type="button" onClick={deleteMainImage}>
                        x
                      </S.DeleteButtonStyle>
                    </S.DeleteButtonWrapper> */}
                </S.PreviewImageWrapper>
              ) : (
                <S.PreviewImageWrapper>
                  <S.PreviewImageStyle src={DefaultImagePreview} alt="기본이미지" />
                </S.PreviewImageWrapper>
              )}
            </S.FileInputBoxStyle>
          </div>

          <div>
            <Input type="file" multiple accept="image/*" id="detailImages" label="상세 이미지 (최대 10개)" placeholder="이미지를 선택하세요" {...register('extra.detailImages')} />
            <S.FileInputBoxStyle>
              {detailImagesPreview && detailImagesPreview.length > 0
                ? renderImageArray.slice(0, 10).map((url, i) => (
                    <S.PreviewImageWrapper key={i}>
                      <S.PreviewImageStyle src={url} className="hidden" width="160" height="160" alt={`image${i}`} />
                      {/* {url !== DefaultImagePreview && (
                        <S.DeleteButtonWrapper>
                          <S.DeleteButtonStyle type="button" onClick={() => deleteDetailImage(i)}>
                            x
                          </S.DeleteButtonStyle>
                        </S.DeleteButtonWrapper>
                      )} */}
                    </S.PreviewImageWrapper>
                  ))
                : [...Array(10)].map((_, i) => (
                    <S.PreviewImageWrapper key={i}>
                      <S.PreviewImageStyle src={DefaultImagePreview} alt="기본이미지" />
                    </S.PreviewImageWrapper>
                  ))}
            </S.FileInputBoxStyle>
          </div>

          <div>
            <Input
              type="text"
              id="name"
              label="제목 (30자 이내)"
              height="40px"
              placeholder="제목을 입력하세요"
              error={errors.name?.message}
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

          <Input
            type="date"
            id="classAt"
            label="클래스 일자"
            placeholder="연/월/일"
            error={errors.extra?.classAt?.message}
            {...register('extra.classAt', {
              required: '클래스 일자를 입력하세요.',
            })}
          />
          <Input
            type="date"
            id="startAt"
            label="모집 시작일"
            placeholder="연/월/일"
            error={errors.extra?.startAt?.message}
            {...register('extra.startAt', {
              required: '모집 시작일을 입력하세요.',
            })}
          />
          <Input
            type="date"
            id="endAt"
            label="모집 종료일"
            placeholder="연/월/일"
            error={errors.extra?.endAt?.message}
            {...register('extra.endAt', {
              required: '모집 종료일을 입력하세요.',
            })}
          />
          <Input
            type="text"
            id="address"
            label="클래스 장소"
            height="40px"
            placeholder="클래스 장소를 입력하세요"
            error={errors.extra?.address?.message}
            {...register('extra.address', {
              required: '클래스 장소를 입력하세요.',
              minLength: {
                value: 2,
                message: '클래스 장소를 2자 이상 입력하세요.',
              },
            })}
          />
          <Select
            id="quantity"
            label="클래스 참여 인원"
            height="40px"
            placeholder="인원을 선택해주세요"
            optionData={optionData}
            error={errors.quantity?.message}
            {...register('quantity', {
              required: '인원을 선택해주세요.',
            })}
          />

          <Input
            type="number"
            id="price"
            min="0"
            label="클래스 참여 비용"
            height="40px"
            placeholder="참여 비용을 입력하세요"
            error={errors.price?.message}
            {...register('price', {
              required: '참여 비용을 입력하세요.',
            })}
          />
          <div>
            <TextArea
              label="클래스 세부 내용"
              type="txt"
              id="content"
              rows="10"
              placeholder="클래스 세부 내용을 10자 이상 입력해주세요"
              error={errors.content?.message}
              {...register('content', {
                required: '클래스 세부 내용을 입력하세요.',
                minLength: {
                  value: 10,
                  message: '클래스 세부 내용을 10자 이상 입력하세요.',
                },
              })}
            />
          </div>
        </S.ClassFormWrapper>
      </S.ClassAddWrapper>
    </Section>
  );
}

export default ClassAdd;
