import DefaultProfile from '@assets/DefaultProfile';
import CommentDeleteButton from '@components/ui/button/CommentDeleteButton';
import CommentEditButton from '@components/ui/button/CommentEditButton';
import ReplyEdit from '@pages/recipe/ReplyEdit';
import useMemberStore from '@zustand/memberStore.mjs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from '@styles/recipe/replyitem.style';
import Text from '@components/ui/Text';

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
  postUserId: PropTypes.number,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

function ReplyItem({ item, postUserId, handleDelete, handleUpdate }) {
  const user = useMemberStore().user;
  const [editMode, setEditMode] = useState(false);

  // 댓글 수정 후 수정모드 off
  const handleUpdateAndSetEditMode = async (formData) => {
    if (await handleUpdate(item._id, formData)) {
      setEditMode(false);
    }
  };

  return (
    <div className="CommentWrapper">
      <S.ReplyItemHeader>
        <S.ReplyItemHeaderleft>
          {item.user.profile ? <S.ReplyItemProfileImage src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.user.profile}`} alt="" /> : <DefaultProfile />}
          <S.ReplyItemUserName href="">
            <Text typography="semibold_s">{item.user.name}</Text>
          </S.ReplyItemUserName>
          {postUserId === item.user._id && <S.ReplyItemWriterBadge>작성자</S.ReplyItemWriterBadge>}
        </S.ReplyItemHeaderleft>
        <div className="replyitem-header-left">
          <S.ReplyItemDate>
            <time dateTime={item.updatedAt}>
              <Text typography="semibold_s">{item.updatedAt.substr(0, 10)}</Text>
            </time>
          </S.ReplyItemDate>
        </div>
      </S.ReplyItemHeader>
      <div>
        {editMode ? (
          <ReplyEdit content={item.content} setEditMode={setEditMode} handleUpdate={handleUpdateAndSetEditMode} />
        ) : (
          <>
            <Text typography="semibold_s">{item.content}</Text>
            {user?._id === item.user._id && (
              <S.ReplyItemButtonContainer>
                <CommentEditButton width="12px" onClick={() => setEditMode(true)}>
                  수정
                </CommentEditButton>
                <CommentDeleteButton width="12px" onClick={() => handleDelete(item._id)}>
                  삭제
                </CommentDeleteButton>
              </S.ReplyItemButtonContainer>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ReplyItem;
