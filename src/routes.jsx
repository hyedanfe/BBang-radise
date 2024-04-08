import Layout from '@components/layout';
import { ClassAdd, ClassDetail, ClassEdit, ClassList, ClassQnAList } from '@pages/class';
import MainPage from '@pages/home/MainPage';
import Login from '@pages/login/Login';
import { MyPage, MyPageEdit } from '@pages/mypage';
import { RecipeAdd, RecipeDetail, RecipeEdit, RecipeList } from '@pages/recipe';
import ReplyList from '@pages/recipe/ReplyList';
import { SignUp, SignUpWelcome } from '@pages/signup';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'class',
        element: <ClassList />,
      },
      {
        path: 'class/:_id',
        element: <ClassDetail />,
      },
      {
        path: 'class/add',
        element: <ClassAdd />,
      },
      {
        path: 'class/:_id/edit',
        element: <ClassEdit />,
      },
      {
        path: 'class/qna',
        element: <ClassQnAList />,
      },
      {
        path: 'recipe',
        element: <RecipeList />,
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetail />,
        children: [
          {
            index: true,
            element: <ReplyList />,
          },
        ],
      },
      {
        path: 'recipe/add',
        element: <RecipeAdd />,
      },
      {
        path: 'recipe/:_id/edit',
        element: <RecipeEdit />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'mypage/:_id/edit',
        element: <MyPageEdit />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signup-alert',
        element: <SignUpWelcome />,
      },
    ],
  },
]);

export default router;
