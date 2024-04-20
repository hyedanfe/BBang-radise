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
        _id: 1,
        email: 'admin@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'admin',
        phone: '0118889999',
        type: 'admin',
        profileImage: 'likelion.png',
      },
      {
        _id: 2,
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
            {
              _id: 3,
              email: 'seller1@market.com',
              password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
              name: 'seller',
              phone: '0118889999',
              type: 'seller',
              profileImage: 'likelion.png',
            },
            {
              _id: 4,
              email: 'seller2@market.com',
              password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
              name: 'seller',
              phone: '0118889999',
              type: 'admin',
              profileImage: 'likelion.png',
            },
          ],
        },
      },
    ],
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
      {
        ok: 1,
        item: {
          _id: 6,
          title: '홈베이킹레시피 소시지빵(피자빵) 만들기',
          extra: 'pizzabreadfinish.jpg',
          content:
            '<p><strong>재료 준비</strong></p><ul><li>강력분 260g</li><li>드라이이스트 5g</li><li>물 80g</li><li>우유 20g</li><li>설탕 30g</li><li>소금 1.5작은술</li><li>계란 1개</li><li>버터 30g</li><li>프랑크소시지 8개</li></ul><p>       [토핑]</p><ul><li>피자치즈, 케찹, 마요네즈 적당량</li><li>파슬리 약간</li></ul><p>       [속재료]</p><ul><li>양파 1개</li><li>캔옥수수 6큰술</li><li>마요네즈 취향껏</li><li>소금, 후추 약간</li></ul><p><br></p><p><strong>조리 순서</strong></p><p><strong style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">1</strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);"> [소시지빵 반죽 만들기]</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">강력분(260g)은 체에 한 번 걸러서 준비해주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">드라이이스트(5g)과 설탕 (30g), 소금(1.5 작은 술), 계란 1개, 물(80g), 우유(20g)를 한데 넣고 잘 섞어 반죽을 만들어줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">* 저는 드라이이스트가 알갱이로 되어 있어서 미온수(80g)에 녹여서 사용해주었어요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">(뜨거운 물로 하면 안 됨)</span></p><p><img src="1-pizzabread.jpg"></p><p><br></p><p><strong>2 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">대충 반죽이 뭉쳐졌으면 실온에 두어 말랑말랑해진 버터(30g)를 넣고 반죽을 열심히 치대주세요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">반죽을 조금 떼어내서 조심스레 늘렸을 때 찢어지지 않고 얇은 막처럼 늘어나면 피자빵 반죽 완성입니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">*반죽기 있으신 분들은 꼭 반죽기 사용해주세요. 손으로 하면 손목도 아프고 시간도 오래 걸려요.</span></p><p><img src="2-pizzabread.jpg"></p><p><br></p><p><strong>3 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">완성된 반죽은 둥글리기 후 1차 발효를 해줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">* 반죽 발효는 전자레인지를 사용하셔도 좋고, 저처럼 아이스박스에 뜨거운 물을 넣고 하셔도 좋아요.</span></p><p><img src="3-pizzabread.jpg"></p><p><br></p><p><strong>4 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">[속재료 만들기]</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">다진 양파(1개), 캔 옥수수(6 큰 술), 마요네즈 취향껏, 소금 약간, 후추 톡톡 넣고 피자빵 속재료를 만들어줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">*마요네즈 양은 취향껏 넣어주세요 :)</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">저는 마요네즈가 많은 게 좋아서 6-7 큰 술 정도 넣었어요.</span></p><p><img src="4-pizzabread.jpg"></p><p><br></p><p><strong>5 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">1시간가량 발효 후 반죽 상태를 확인해보니 반죽이 2배로 부풀어있네요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">발효가 잘 되었는지 손가락으로 반죽을 찔러봤는데요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">수축 없이 그 상태 그대로 있는 걸 보니 발효가 잘 된 것 같아요 ㅎㅎㅎ</span></p><p><img src="5-pizzabread.jpg"></p><p><br></p><p><strong>6 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">반죽은 50-55g씩 나누어 둥글리기 해주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">비닐로 덮어 2차 발효를 해줍니다. (저는 20분 정도 해주었어요.)</span></p><p><img src="6-pizzabread".jpg"></p><p><br></p><p><strong>7 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">2차 발효까지 마친 반죽은 밀대를 이용해 소시지 길이보다 약간 더 길게 밀어주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">(이때 덧가루를 많이 사용하시면 반죽이 뭉쳐지지 않으니 소량만 사용해주세요.)</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">반죽 위에 소시지를 올려놓고 빈틈없이 굴곡 없이 잘 감싸주세요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">그리고 나서 적당한 간격으로 커팅을 해주시는데요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">사진에서도 보시면 아시겠지만, 반죽은 끝을 조금 남겨두도록 해요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">(소시지는 완전히 잘라야 함)</span></p><p><img src="7-pizzabread.jpg"></p><p><br></p><p><strong>8 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">커팅 한 반죽은 지그재그로 펼쳐서 모양을 잡아줍니다.</span></p><p><img src="8-pizzabread.jpg"></p><p><br></p><p><strong>9 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">속재료와 피자치즈는 취향껏 올려주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">케찹과 마요네즈, 파슬리 가루를 적당량 뿌려줍니다.</span></p><p><img src="9-pizzabread.jpg"></p><p><br></p><p><strong>10 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">이제 오븐에 구워주기만 하면 끝 ~</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">180도에서 15분 ~ 20분 정도 구워줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">* 전자레인지마다 사양이 다르니 시간과 온도는 참고만 해주세요.</span></p><p><img src="10-pizzabread.jpg"></p><p><br></p><p><strong>11 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">그러면 요렇게 먹음직스러운 소시지 피자빵이 완성된답니다 :)</span></p><p><img src="pizzabreadfinish.jpg"></p>',
          type: 'recipe',
          views: 3,
          user: {
            _id: 2,
            name: 'GD',
            profile: 'likelion.png',
          },
          createdAt: '2024.04.20 02:24:03',
          updatedAt: '2024.04.20 02:24:03',
          seller_id: null,
        },
      },
    ],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
