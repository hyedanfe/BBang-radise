import DefaultProfile from '@assets/DefaultProfile';
import CommentDeleteButton from '@components/ui/button/CommentDeleteButton';
import CommentEditButton from '@components/ui/button/CommentEditButton';
import ReplyEdit from '@pages/recipe/ReplyEdit';
import useMemberStore from '@zustand/memberStore.mjs';
import PropTypes from 'prop-types';
import { useState } from 'react';

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
      <div className="CommentHeader">
        {item.user.profile ? <img className="UserProfileImage  " src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.user.profile}`} alt="" /> : <DefaultProfile />}
        <a href="">
          {item._id} {item.user.name}
        </a>
        {postUserId === item.user._id && <span className="text-sm ml-2 font-semibold text-gray-400">작성자</span>}
        <time className="ml-auto text-gray-500 dark:text-gray-400" dateTime={item.updatedAt}>
          {item.updatedAt}
        </time>
      </div>
      <div className="flex items-center">
        {editMode ? (
          <ReplyEdit comment={item.comment} setEditMode={setEditMode} handleUpdate={handleUpdateAndSetEditMode} />
        ) : (
          <>
            <pre className="font-custom whitespace-pre-wrap">{item.comment}</pre>
            {user?._id === item.user._id && (
              <div className="ml-auto flex whitespace-nowrap">
                <CommentEditButton onClick={() => setEditMode(true)}>수정</CommentEditButton>
                <CommentDeleteButton onClick={() => handleDelete(item._id)}>삭제</CommentDeleteButton>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ReplyItem;
