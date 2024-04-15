// import QuillApp from '@components/ui/QuillEditor/QuillApp';
import QuillEditor from '@components/ui/QuillEditor/QuillEditor';
import Text from '@components/ui/Text';

function RecipeAdd() {
  return (
    <div>
      <Text color="black" display="block" typography="display_l">
        베이킹 레시피 등록하기
      </Text>
      <QuillEditor />
    </div>
  );
}

export default RecipeAdd;
