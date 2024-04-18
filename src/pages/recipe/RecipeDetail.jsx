import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import * as S from '@styles/recipe/recipedetail.style';
import Section from '@components/ui/Section';
import useMemberStore from '@zustand/memberStore.mjs';
import RoundButton from '@components/ui/button/RoundButton';
import Text from '@components/ui/Text';

function RecipeDetail() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useMemberStore().user;

  let firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const { data } = useQuery({
    queryKey: ['posts', id],
    queryFn: () =>
      axios.get(`/posts/${id}`, {
        params: { incrementView: firstRender.current },
      }),
    select: (response) => response.data,
    suspense: true,
  });

  // 삭제
  const handleEdit = async () => {
    navigate(`recipe/${id}/edit`);
  };

  const item = data?.item;

  return (
    <Section>
      <S.RecipeDetailWrapper>
        {item && (
          <div className="main">
            <S.RecipeDetailCard>
              <S.RecipeDetailCardImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.extra}`} alt="" />
              <S.RecipeDetailCardContent>
                <Text color="black" typography="black_xl">
                  {item.title}
                </Text>
                <Text color="black" typography="extrabold_l">
                  {item.user.name}
                </Text>
                <Text color="black" typography="semibold_s">
                  {item.updatedAt}
                </Text>
              </S.RecipeDetailCardContent>
            </S.RecipeDetailCard>

            <S.RecipeDetailContent>
              <p>내용: </p>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </S.RecipeDetailContent>
          </div>
        )}
        {user?._id === item.user._id && <RoundButton page="edit" onClick={handleEdit} />}
        <Outlet context={item} />
      </S.RecipeDetailWrapper>
    </Section>
  );
}

export default RecipeDetail;
