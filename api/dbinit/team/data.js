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
        _id: 1,
        type: 'recipe',
        title: '지옥에서 온 츄러스..',
        content: '홀랑 태워먹었군요',
        mainimage: {
          originalname: 'churos.jpg',
          name: 'churos.jpg',
          path: 'https://market-lion.koyeb.app/api/files/08-bbangradise/churos.jpg',
        },
      },
      {
        _id: 2,
        type: 'recipe',
        title: '사르르 녹는 딸기생크림케이크',
        content: '생크림이 핵심입니다.',
        mainimage: {
          originalname: 'strawberrycake.jpg',
          name: 'strawberrycake.jpg',
          path: 'https://market-lion.koyeb.app/api/files/08-bbangradise/strawberrycake.jpg',
        },
      },
      {
        _id: 3,
        type: 'recipe',
        title: '탱글탱글 우유푸딩',
        content: '탱글탱글 부드러운 식감을 자랑합니다.',
        mainimage: {
          originalname: 'pudding.jpg',
          name: 'pudding.jpg',
          path: 'https://market-lion.koyeb.app/api/files/08-bbangradise/pudding.jpg',
        },
      },
      {
        _id: 4,
        type: 'recipe',
        title: '풍미가 좋은 메이플피칸스콘',
        content: '메이플시럽을 입힌 피칸이 맛의 핵심',
        mainimage: {
          originalname: 'maplepecanscone.jpg',
          name: 'maplepecanscone.jpg',
          path: 'https://market-lion.koyeb.app/api/files/08-bbangradise/maplepecanscone.jpg',
        },
      },
      {
        _id: 5,
        type: 'recipe',
        title: '생크림을 넣어 더 고소한 밀크브레드',
        content: '생각보다 퍽퍽하게 만들어졌네요..ㅠ',
        mainimage: {
          originalname: 'milkbread.jpg',
          name: 'milkbread.jpg',
          path: 'https://market-lion.koyeb.app/api/files/08-bbangradise/milkbread.jpg',
        },
      },
    ],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
