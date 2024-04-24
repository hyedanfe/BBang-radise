import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import * as S from '@styles/recipe/recipedetail.style';
import Section from '@components/ui/Section';
import useMemberStore from '@zustand/memberStore.mjs';
import RoundButton from '@components/ui/button/RoundButton';
import Text from '@components/ui/Text';
import GlobalRecipeContentStyle from '@styles/recipe/GlobalRecipeContentStyle';

function RecipeDetail() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { _id } = useParams();
  const user = useMemberStore().user;

  let firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const { data } = useQuery({
    queryKey: ['posts', _id],
    queryFn: () =>
      axios.get(`/posts/${_id}`, {
        params: { incrementView: firstRender.current },
      }),
    select: (response) => response.data,
    suspense: true,
  });

  // 수정
  const handleEdit = async () => {
    navigate(`/recipe/${_id}/edit`);
  };

  const item = data?.item;

  return (
    <Section>
      {item && (
        <S.RecipeDetailWrapper>
          <S.RecipeDetailCard className="card">
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

          <S.RecipeDetailMain>
            <S.RecipeDetailContent>
              <GlobalRecipeContentStyle />
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </S.RecipeDetailContent>
            <S.RecipeDetailReply>
              <Outlet context={item} />
            </S.RecipeDetailReply>
          </S.RecipeDetailMain>
        </S.RecipeDetailWrapper>
      )}
      {user?._id === item.user._id && <RoundButton page="edit" onClick={handleEdit} />}
    </Section>
  );
}

export default RecipeDetail;
