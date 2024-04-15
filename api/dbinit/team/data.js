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
    user: [
      {
        email: 'admin@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'admin',
        phone: '0118889999',
        address: '서울시 강남구 역삼동 123',
        type: 'admin',
        profileImage: 'likelion.png',
      },
      {
        email: 'GD@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'GD',
        phone: '0118889999',
        address: '서울시 강남구 역삼동 123',
        type: 'seller',
        profileImage: 'likelion.png',
        extra: {
          birthday: '10-23',
          address: [
            {
              id: 1,
              name: '집',
              value: '서울시 강남구 역삼동 123',
            },
          ],
        },
      },
    ],
    // 상품
    product: [
      {
        _id: 1,
        price: 8000,
        quantity: 12,
        name: '따끈따끈 매일 아침 갓 만든 식빵과 함께하기',
        mainImages: [
          {
            'path ': '/files/00-sample/sample-football.jpg',
            'name ': 'bbang03.jpg',
          },
        ],
        content: '베이킹에 관심있는 사람이라면 누구나 도전할 만한 베이킹 클래스입니다. 매 수업마다 새로운 빵을 만듭니다',
        extra: {
          startAt: '2024.04.13 12:00:00',
          endAt: '2024.04.30 12:00:00',
          classAt: '2024.05.20 12:00:00',
          address: '광주광역시 동구',
        },
        show: true,
        shippingFees: 0,
        seller_id: 6,
        active: true,
        buyQuantity: 12,
        createdAt: '2024.04.12 16:46:58',
        updatedAt: '2024.04.12 16:46:58',
        replies: [],
        bookmarks: [],
      },
      {
        _id: 2,
        price: 12000,
        quantity: 20,
        name: '누구나 쉽게 할 수 있는 일일 클래스 ',
        mainImages: [
          {
            'path ': '/files/00-sample/sample-football.jpg',
            'name ': 'bbang02.jpg',
          },
        ],
        content: '베이킹에 관심있는 사람이라면 누구나 도전할 만한 베이킹 클래스입니다. 매 수업마다 새로운 빵을 만듭니다',
        extra: {
          startAt: '2024.04.01 12:00:00',
          endAt: '2024.04.11 12:00:00',
          classAt: '2024.04.30 12:00:00',
          address: '서울 종로구',
        },
        show: true,
        shippingFees: 0,
        seller_id: 6,
        active: true,
        buyQuantity: 15,
        createdAt: '2024.04.12 16:46:58',
        updatedAt: '2024.04.12 16:46:58',
        replies: [],
        bookmarks: [],
      },
      {
        _id: 3,
        price: 20000,
        quantity: 12,
        name: '버터 가득 모닝빵 만들기 글자 수 제한 1줄보다는 길게 ',
        mainImages: [
          {
            'path ': '/files/00-sample/sample-football.jpg',
            'name ': 'bbang01.jpg',
          },
        ],
        content:
          '#이제는 빵에 소금 올리는 시대! 담백짭짤 소금모닝빵! 안녕하세요 소뮬입니다:) 저는 아웃백,퓨전 음식점 등 여러 레스토랑에서 셰프로 일하며 집에서도 음식을 만들어 먹을 수 있게끔 요리 블로그를 운영하다 하다 쿠킹과 베이킹클래스를 열게 되었습니다. 집에서 홈 베이킹이 로망인데 로망을 아직 실현 못 하신분들 주목!!',
        extra: {
          startAt: '2024.04.13 12:00:00',
          endAt: '2024.04.30 12:00:00',
          classAt: '2024.05.19 12:00:00',
          address: '경기도 판교시 A타워 12동',
        },
        show: true,
        shippingFees: 0,
        seller_id: 6,
        active: true,
        buyQuantity: 8,
        createdAt: '2024.04.12 16:46:58',
        updatedAt: '2024.04.12 16:46:58',
        replies: [],
        bookmarks: [],
      },
      {
        _id: 4,
        price: 40000,
        quantity: 7,
        name: '에클레어 디저트 마스터 클래스 ',
        mainImages: [
          {
            'path ': '/files/00-sample/sample-football.jpg',
            'name ': 'bbang04.jpg',
          },
        ],
        content:
          '안녕하세요 유아시스 베이킹 클래스 입니다! 3년간 에끌레어 전문점을 그냥 운영한 것이 아닌, 지역내 유명한 샵으로 자리잡은 경험과 노하우가 있는 만큼, 창업 위주의 수업도 포함하여 기존 창업자 분들 또는 예비 창업자 분들께 많은 도움을 드릴 수 있다고 장담합니다.',
        extra: {
          startAt: '2024.03.10 12:00:00',
          endAt: '2024.04.02 12:00:00',
          classAt: '2024.04.10 12:00:00',
          address: '광주광역시 동구',
        },
        show: true,
        shippingFees: 0,
        seller_id: 6,
        active: true,
        buyQuantity: 7,
        createdAt: '2024.03.08 16:46:58',
        updatedAt: '2024.03.08 16:46:58',
        replies: [],
        bookmarks: [],
      },
    ],
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
