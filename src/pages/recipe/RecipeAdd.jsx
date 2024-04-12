import QuillEditor from '@components/ui/QuillEditor';
import Text from '@components/ui/Text';

function RecipeAdd() {
  return (
    <>
      <Text color="black" display="block" typography="display_l">
        베이킹 레시피 등록하기
      </Text>
      <QuillEditor />
    </>
  );
}

export default RecipeAdd;
