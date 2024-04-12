import moment from 'moment';

function getDay(day = 0) {
  return moment().add(day, 'days').format('YYYY.MM.DD');
}
function getTime(day = 0, second = 0) {
  return moment().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (nextSeq) => {
  return {
    // 회원
    user: [],
    // 상품
    product: [],
    // 주문
    order: [],
    // 후기
    reply: [],
    // 장바구니
    cart: [],
    // 즐겨찾기/북마크
    bookmark: [],
    // QnA, 공지사항, 게시판
    post: [
      {
        type: 'recipe',
        title: '지옥에서 온 츄러스..',
        content: '홀랑 태워버렸군요',
        extra: 'churos.jpg',
        views: 0,
        user: {
          _id: 4,
          name: '셀러',
        },
        _id: 1,
        createdAt: '2024.04.11 23:27:32',
        updatedAt: '2024.04.11 23:27:32',
      },
      {
        type: 'recipe',
        title: '사르르 녹는 딸기생크림케이크',
        content: '생크림이 핵심입니다.',
        extra: 'strawberrycake.jpg',
        views: 0,
        user: {
          _id: 4,
          name: '셀러',
        },
        _id: 2,
        createdAt: '2024.04.11 23:27:32',
        updatedAt: '2024.04.11 23:27:32',
      },
      {
        type: 'recipe',
        title: '탱글탱글 우유푸딩',
        content: '탱글탱글 부드러운 식감을 자랑합니다.',
        extra: 'pudding.jpg',
        views: 0,
        user: {
          _id: 4,
          name: '셀러',
        },
        _id: 3,
        createdAt: '2024.04.11 23:27:32',
        updatedAt: '2024.04.11 23:27:32',
      },
      {
        type: 'recipe',
        title: '풍미가 좋은 메이플피칸스콘',
        content: '메이플시럽을 입힌 피칸이 맛의 핵심',
        extra: 'maplepecanscone.jpg',
        views: 0,
        user: {
          _id: 4,
          name: '셀러',
        },
        _id: 4,
        createdAt: '2024.04.11 23:27:32',
        updatedAt: '2024.04.11 23:27:32',
      },
      {
        type: 'recipe',
        title: '생크림을 넣어 더 고소한 밀크브레드',
        content: '생각보다 퍽퍽하게 만들어졌네요..ㅠ',
        extra: 'milkbread.jpg',
        views: 0,
        user: {
          _id: 4,
          name: '셀러',
        },
        _id: 5,
        createdAt: '2024.04.11 23:27:32',
        updatedAt: '2024.04.11 23:27:32',
      },
    ],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
