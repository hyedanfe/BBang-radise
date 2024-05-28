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
        phone: '01077777777',
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
        profileImage: 'profile02.png',
      },
      {
        _id: 3,
        email: 'seller1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: 'z김제빵사Z지존',
        phone: '01034567890',
        address: '대전시 성심당',
        type: 'seller',
        profileImage: 'profile03.jpeg',
      },
      {
        _id: 4,
        email: 'seller2@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '빵빠라빵빵',
        phone: '01111111111',
        address: '인천시',
        type: 'seller',
        profileImage: 'profile04.jpeg',
      },
      {
        _id: 5,
        email: 'seller3@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '빵시혁',
        phone: '01133334444',
        address: '방탄시',
        type: 'seller',
        profileImage: 'profile05.jpeg',
      },
      {
        _id: 6,
        email: 'seller4@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '빵구석빵매니아',
        phone: '01133335555',
        address: '광주시',
        type: 'seller',
        profileImage: 'profile06.jpeg',
      },
      {
        _id: 7,
        email: 'seller5@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '나는제빵왕이될거야!',
        phone: '0116666666',
        address: '부산시',
        type: 'seller',
        profileImage: 'profile07.jpeg',
      },
      {
        _id: 8,
        email: 'seller6@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '태양의손',
        phone: '01188888888',
        address: '삼척시',
        type: 'seller',
        profileImage: 'profile08.jpeg',
      },
      {
        _id: 9,
        email: 'seller7@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '빔캠브레드',
        phone: '01112121212',
        address: '서울시 마포구',
        type: 'seller',
        profileImage: 'profile09.png',
      },
      {
        _id: 10,
        email: 'seller8@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '신선타이거',
        phone: '01111111111',
        address: '서울시 중구',
        type: 'seller',
        profileImage: 'profile10.png',
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
        _id: 1,
        title: '지옥에서 온 츄러스..',
        extra: 'churos.jpg',
        content:
          '<p>유튜브 보고 따라한건데 반죽 단계에서부터 반죽이 너무 질다 싶더라구요..</p><p>반죽이 너무 질다 보니 모양도 안 예쁘게 짜지고 심지어 태웠네요..ㅋㅋㅋㅋ</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/churos.jpg"></p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/churos2.jpg"></p><p><br></p><p>맛은 그런대로 먹을 만 했는데 이유가 뭘까요.. 마스터님들 아신다면 답변 부탁드립니다</p>',
        type: 'recipe',
        views: 9,
        user: {
          _id: 2,
          name: 'GD',
          profile: 'profile02.png',
        },
        createdAt: '2024.04.24 14:52:21',
        updatedAt: '2024.04.24 14:52:21',
        seller_id: null,
        replies: [],
      },
      {
        _id: 2,
        title: '겉바속쫀 시나몬 쿠키를 만들어볼까요~~',
        extra: 'cinamoncookie.jpg',
        content:
          '<p>안녕하세요~~ 빵구석빵매니아입니다~!</p><p><br></p><p>오늘은 겉은 바삭 속은 쫀득한 시나몬 쿠키 레시피를 소개해드리려 하는데요!</p><p>시나몬을 좋아하시는 분들이라면 누구나 맛있게 드실 만한 레시피라고 자신있게 말씀드릴 수 있습니다!!</p><p><br></p><p>반죽을 넉넉하게 만들어서 밀폐용기에 담아 냉동보관 하시고 드실 때 해동없이 바로 구워 드시면 갓 만든 쿠키 맛 그대로 편하게 드실 수 있으니 집에서 한번 시도해보시길 추천드려요~!!</p><p><br></p><p><br></p><p><br></p><p><strong>재료 (약 20개 분량)</strong></p><p><br></p><ul><li>무염 버터 140g (실온)</li><li>황설탕 145g</li><li>소금 한 꼬집</li><li>달걀 1개 (실온)</li><li>올리고당 30g (선택 사항)</li><li>박력분 280g</li><li>베이킹파우더 2 티스푼</li><li>시나몬 가루 5 티스푼</li></ul><p><br></p><p><strong>조리 단계</strong></p><p><br></p><p><strong>1</strong> 오븐을 180°C로 예열합니다.</p><p><br></p><p><strong>2</strong> 큰 볼에 실온의 버터를 넣고 부드러운 크림 상태가 될 때까지 익힙니다.</p><p><br></p><p><strong>3</strong> 황설탕과 소금을 넣고 2~3분 동안 흰색이 될 때까지 익힙니다.</p><p><br></p><p><strong>4</strong> 실온의 달걀을 넣고 매끄러워질 때까지 섞어줍니다. 올리고당을 사용한다면 이 단계에서 넣고 섞습니다.</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-2.jpg"></p><p><br></p><p><strong>5 </strong>다른 볼에 박력분, 베이킹파우더, 시나몬 가루를 체에 내려 섞어줍니다.</p><p><br></p><p><strong>6 </strong>건조 재료를 젖은 재료에 넣고 부드러운 반죽이 될 때까지 저어줍니다. 반죽이 너무 끈적거린다면 박력분을 조금씩 넣어 조절합니다.</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-5.jpg"></p><p><br></p><p><strong>7 </strong>반죽을 플라스틱 랩으로 싸서 냉장고에서 30분 이상 휴지시킵니다.</p><p><br></p><p><strong>8 </strong>휴지시킨 반죽을 30g씩 분할하여 원하는 모양으로 만듭니다.</p><p><br></p><p><strong>9 </strong>쿠키 사이에 간격을 충분히 유지하며 베이킹 시트에 올려놓습니다.</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-4.jpg"></p><p><br></p><p><strong>10 </strong>180°C로 예열된 오븐에서 13~15분 동안 구워줍니다. 쿠키 가장자리가 살짝 노릇하게 될 때까지 구워줍니다.</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-6.jpg"></p><p><br></p><p><strong>11</strong> 완성~!!</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/cinamoncookie.jpg"></p><p><br></p><p><br></p><p><strong>TIP !</strong></p><ul><li>달걀 대신 우유 50ml를 사용해도 좋습니다.</li><li>시나몬 가루를 더 넣으면 더욱 풍부한 시나몬 향을 즐길 수 있습니다.</li><li>쿠키 반죽을 냉장고에서 더 오래 휴지시키면 쿠키가 더 바삭하게 구워집니다.</li><li>쿠키에 초콜릿 칩, 건포도, 호두 등을 넣어도 맛있게 즐길 수 있습니다.</li></ul>',
        type: 'recipe',
        views: 77,
        user: {
          _id: 6,
          name: '빵구석빵매니아',
          profile: 'profile06.jpeg',
        },
        createdAt: '2024.04.24 17:42:07',
        updatedAt: '2024.04.24 18:16:14',
        seller_id: null,
        replies: [
          {
            content: '한 번 시도해보겠습니다!',
            user: {
              _id: 7,
              name: '나는제빵왕이될거야!',
              profile: 'profile07.jpeg',
            },
            _id: 12,
            createdAt: '2024.04.25 02:17:02',
            updatedAt: '2024.04.25 02:17:02',
          },
        ],
      },
      {
        _id: 3,
        title: '딸기가 제철이라 만들어본 딸기레어치즈케이크',
        extra: 'rarecheesecake.jpg',
        content:
          '<p>빵라다이스 주민 여러분 요새 딸기 너무 맛있지 않나요?! 이런 때에 딸기 디저트 하나쯤은 만들어 보고 싶어서 시도해본 레시피인데 너무 맛있더라구요!! 그래서 주민 여러분과 공유하러 왔답니다~!</p><p><br></p><p><strong>재료:</strong></p><p><br></p><p><strong>크럼블 바닥:</strong></p><ul><li>그레이엄 크래커 150g</li><li>버터 75g</li><li>설탕 30g</li></ul><p><strong>크림치즈 필링:</strong></p><ul><li>크림치즈 450g (실온)</li><li>설탕 100g</li><li>레몬즙 1큰술</li><li>바닐라 익스트랙 1/2 티스푼</li><li>달걀 2개</li><li>생크림 200ml</li></ul><p><strong>토핑:</strong></p><ul><li>딸기 300g</li><li>딸기잼 2큰술 (선택사항)</li><li>민트잎 (선택사항)</li></ul><p><br></p><p><strong>조리 단계:</strong></p><p><strong>1. 오븐 예열 및 재료 준비:</strong></p><ol><li>오븐을 180°C로 예열합니다.</li><li>베이킹 시트에 쿠킹 시트를 lót니다.</li><li>딸기는 깨끗이 씻어 물기를 제거하고 원하는 모양으로 썰어 준비합니다.</li></ol><p><br></p><p><strong>2. 크럼블 바닥 만들기:</strong></p><ol><li>그레이엄 크래커를 믹서기나 식품프로세서로 곱게 부수어줍니다.</li><li>녹인 버터와 설탕을 넣고 잘 섞어줍니다.</li><li>준비된 베이킹 시트에 크럼블 바닥을 골고루 펴서 눌러줍니다.</li><li>크럼블 바닥을 10분 정도 오븐에서 굽습니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-2.jpg"></p><p><br></p><p><strong>3. 크림치즈 필링 만들기:</strong></p><ol><li>크림치즈를 부드러워질 때까지 믹싱합니다.</li><li>설탕, 레몬즙, 바닐라 익스트랙을 넣고 3분 정도 믹싱합니다.</li><li>달걀을 하나씩 넣고 매번 30초 정도 믹싱합니다.</li><li>생크림을 넣고 부드러워질 때까지 믹싱합니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-3.jpg"></p><p><br></p><p><strong>4. 케이크 조립 및 냉장:</strong></p><ol><li>굽고 식힌 크럼블 바닥 위에 크림치즈 필링을 골고루 붓습니다.</li><li>케이크를 냉장고에서 4시간 이상, 혹은 하룻밤 동안 냉장시킵니다.</li></ol><p><br></p><p><strong>5. 토핑 및 완성:</strong></p><p><br></p><p><strong><span class="ql-cursor"></span></strong><img src="https://api.frontendschool.shop/api/files/08-bbangradise/rarecheesecake.jpg"></p>',
        type: 'recipe',
        views: 2,
        user: {
          _id: 9,
          name: '빔캠브레드',
          profile: 'profile09.png',
        },
        createdAt: '2024.04.21 01:59:07',
        updatedAt: '2024.04.21 01:59:07',
        seller_id: null,
      },
      {
        _id: 4,
        title: '피칸덕후가 강추하는 메이플피칸스콘 레시피',
        extra: 'maplepecanscone.jpg',
        content:
          '<p>안녕하세용~! 저는 피칸을 정말 사랑하는 피칸덕후인데 그런 제가 만들어 먹어 보고 정말 감탄한 찐추천 레시피를 소개해드립니다ㅎㅎ 만들어 먹어보시면 이해가 가실 거에여ㅎㅎ 그럼 시작해볼까요~~</p><p><br></p><p><strong>재료:</strong></p><ul><li><strong>건조 재료:</strong></li><li class="ql-indent-1">중력분 300g</li><li class="ql-indent-1">박력분 50g</li><li class="ql-indent-1">베이킹 파우더 5g</li><li class="ql-indent-1">소금 3g</li><li class="ql-indent-1">설탕 50g</li><li><strong>습식 재료:</strong></li><li class="ql-indent-1">무염 버터 170g (차가운 상태)</li><li class="ql-indent-1">달걀 1개</li><li class="ql-indent-1">우유 80ml</li><li class="ql-indent-1">바닐라 익스트랙 2g</li><li class="ql-indent-1">메이플 시럽 55g + 소금 1g</li><li><strong>토핑:</strong></li><li class="ql-indent-1">흰자 10g</li><li class="ql-indent-1">메이플 시럽 12g</li><li class="ql-indent-1">다진 피칸 90g</li><li class="ql-indent-1"><br></li></ul><p><strong>조리 단계:</strong></p><p><br></p><p><strong>1. 오븐 예열 및 재료 준비:</strong></p><ol><li>오븐을 175°C로 예열합니다.</li><li>베이킹 시트에 쿠킹 시트를 lót니다.</li><li>피칸은 굵게 다져 준비합니다.</li></ol><p><br></p><p><strong>2. 건조 재료 섞기:</strong></p><ol><li>믹싱볼에&nbsp;<strong>중력분, 박력분, 베이킹 파우더, 소금, 설탕</strong>을 넣고 체에 내려 섞어줍니다.</li><li>뭉침이 생기지 않도록 spatula로 잘 섞어줍니다.</li></ol><p><br></p><p><strong>3. 습식 재료 섞기:</strong></p><ol><li>다른 믹싱볼에&nbsp;<strong>차가운 버터</strong>를 깍둑썰기하여 넣고 spatula로 잘 섞어줍니다.</li><li><strong>설탕</strong>을 넣고 3분 정도 믹싱하여 흰색으로 부풀어 오르게 합니다.</li><li><strong>달걀</strong>을 넣고 1분 정도 믹싱합니다.</li><li><strong>바닐라 익스트랙</strong>을 넣고 섞어줍니다.</li><li><strong>메이플 시럽</strong>과&nbsp;<strong>소금 1g</strong>을 넣고 섞어줍니다.</li></ol><p><br></p><p><strong>4. 반죽 만들기:</strong></p><ol><li><strong>건조 재료</strong>를&nbsp;<strong>습식 재료</strong>에 3회에 나누어 넣고 spatula로 부드러운 반죽이 될 때까지 섞어줍니다.</li><li>반죽이 뭉쳐질 때까지&nbsp;<strong>주먹</strong>으로 살짝 눌러줍니다.</li><li>반죽이 너무 끈적이면&nbsp;<strong>중력분</strong>을 조금씩 넣어 조절합니다.</li></ol><p><br></p><p><strong>5. 반죽 성형 및 냉장:</strong></p><ol><li>반죽을&nbsp;<strong>사각형</strong>&nbsp;모양으로 펴서&nbsp;<strong>두께 2cm</strong>&nbsp;정도 되도록 만듭니다.</li><li><strong>칼</strong>로 반죽을&nbsp;<strong>삼각형</strong>&nbsp;모양으로 6등분합니다.</li><li>삼각형 모양의 반죽을&nbsp;<strong>쿠킹 시트</strong>에 올려&nbsp;<strong>30분 이상 냉장고</strong>에서 휴지시킵니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/maplepecanscone-1.jpg"></p><p><br></p><p><strong>6. 토핑 바르기:</strong></p><ol><li><strong>냉장고</strong>에서 반죽을 꺼내&nbsp;<strong>흰자</strong>를 솔로 골고루 발라줍니다.</li><li><strong>다진 피칸</strong>을 골고루 뿌려줍니다.</li><li><strong>메이플 시럽</strong>을 솔로 가볍게 뿌려줍니다.</li></ol><p><br></p><p><strong>7. 굽기:</strong></p><ol><li><strong>예열된 오븐</strong>에서&nbsp;<strong>25분</strong>&nbsp;정도 굽습니다.</li><li>스콘이 노릇노릇해지고 겉면이 바삭해지면 완성입니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/maplepecanscone-2.jpg"></p><p><br></p><p><br></p>',
        type: 'recipe',
        views: 2,
        user: {
          _id: 7,
          name: '나는제빵왕이될거야!',
          profile: 'profile07.png',
        },
        createdAt: '2024.04.22 01:38:38',
        updatedAt: '2024.04.22 01:38:38',
        seller_id: null,
      },
      {
        _id: 5,
        title: '생크림을 넣어 더 고소한 밀크브레드',
        extra: 'milkbread.jpg',
        content:
          '<p>..를 원했으나 에어프라이기로 구우니 표면이 딱딱해지고 조금 퍽퍽해졌다..ㅜㅜ</p><p>그래도 맛은 먹을만 한듯</p><p>이 레시피는 되도록 오븐 있는 분들만 시도하세요ㅋㅋㅋ</p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/milkbread.jpg"></p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/milkbread-1.jpg"></p>',
        type: 'recipe',
        views: 2,
        user: {
          _id: 5,
          name: '빵시혁',
          profile: 'profile05.png',
        },
        createdAt: '2024.04.23 01:08:04',
        updatedAt: '2024.04.23 01:08:04',
        seller_id: null,
      },
      {
        _id: 6,
        title: '홈베이킹레시피 소시지빵(피자빵) 만들기',
        extra: 'pizzabreadfinish.jpg',
        content:
          '<p><strong>재료 준비</strong></p><ul><li>강력분 260g</li><li>드라이이스트 5g</li><li>물 80g</li><li>우유 20g</li><li>설탕 30g</li><li>소금 1.5작은술</li><li>계란 1개</li><li>버터 30g</li><li>프랑크소시지 8개</li></ul><p>       [토핑]</p><ul><li>피자치즈, 케찹, 마요네즈 적당량</li><li>파슬리 약간</li></ul><p>       [속재료]</p><ul><li>양파 1개</li><li>캔옥수수 6큰술</li><li>마요네즈 취향껏</li><li>소금, 후추 약간</li></ul><p><br></p><p><strong>조리 순서</strong></p><p><strong style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">1</strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);"> [소시지빵 반죽 만들기]</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">강력분(260g)은 체에 한 번 걸러서 준비해주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">드라이이스트(5g)과 설탕 (30g), 소금(1.5 작은 술), 계란 1개, 물(80g), 우유(20g)를 한데 넣고 잘 섞어 반죽을 만들어줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">* 저는 드라이이스트가 알갱이로 되어 있어서 미온수(80g)에 녹여서 사용해주었어요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">(뜨거운 물로 하면 안 됨)</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/1-pizzabread.jpg"></p><p><br></p><p><strong>2 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">대충 반죽이 뭉쳐졌으면 실온에 두어 말랑말랑해진 버터(30g)를 넣고 반죽을 열심히 치대주세요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">반죽을 조금 떼어내서 조심스레 늘렸을 때 찢어지지 않고 얇은 막처럼 늘어나면 피자빵 반죽 완성입니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">*반죽기 있으신 분들은 꼭 반죽기 사용해주세요. 손으로 하면 손목도 아프고 시간도 오래 걸려요.</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/2-pizzabread.jpg"></p><p><br></p><p><strong>3 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">완성된 반죽은 둥글리기 후 1차 발효를 해줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">* 반죽 발효는 전자레인지를 사용하셔도 좋고, 저처럼 아이스박스에 뜨거운 물을 넣고 하셔도 좋아요.</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/3-pizzabread.jpg"></p><p><br></p><p><strong>4 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">[속재료 만들기]</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">다진 양파(1개), 캔 옥수수(6 큰 술), 마요네즈 취향껏, 소금 약간, 후추 톡톡 넣고 피자빵 속재료를 만들어줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">*마요네즈 양은 취향껏 넣어주세요 :)</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">저는 마요네즈가 많은 게 좋아서 6-7 큰 술 정도 넣었어요.</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/4-pizzabread.jpg"></p><p><br></p><p><strong>5 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">1시간가량 발효 후 반죽 상태를 확인해보니 반죽이 2배로 부풀어있네요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">발효가 잘 되었는지 손가락으로 반죽을 찔러봤는데요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">수축 없이 그 상태 그대로 있는 걸 보니 발효가 잘 된 것 같아요 ㅎㅎㅎ</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/5-pizzabread.jpg"></p><p><br></p><p><strong>6 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">반죽은 50-55g씩 나누어 둥글리기 해주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">비닐로 덮어 2차 발효를 해줍니다. (저는 20분 정도 해주었어요.)</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/6-pizzabread.jpg"></p><p><br></p><p><strong>7 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">2차 발효까지 마친 반죽은 밀대를 이용해 소시지 길이보다 약간 더 길게 밀어주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">(이때 덧가루를 많이 사용하시면 반죽이 뭉쳐지지 않으니 소량만 사용해주세요.)</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">반죽 위에 소시지를 올려놓고 빈틈없이 굴곡 없이 잘 감싸주세요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">그리고 나서 적당한 간격으로 커팅을 해주시는데요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">사진에서도 보시면 아시겠지만, 반죽은 끝을 조금 남겨두도록 해요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">(소시지는 완전히 잘라야 함)</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/7-pizzabread.jpg"></p><p><br></p><p><strong>8 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">커팅 한 반죽은 지그재그로 펼쳐서 모양을 잡아줍니다.</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/8-pizzabread.jpg"></p><p><br></p><p><strong>9 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">속재료와 피자치즈는 취향껏 올려주시고요.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">케찹과 마요네즈, 파슬리 가루를 적당량 뿌려줍니다.</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/9-pizzabread.jpg"></p><p><br></p><p><strong>10 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">이제 오븐에 구워주기만 하면 끝 ~</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">180도에서 15분 ~ 20분 정도 구워줍니다.</span></p><p><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">* 전자레인지마다 사양이 다르니 시간과 온도는 참고만 해주세요.</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/10-pizzabread.jpg"></p><p><br></p><p><strong>11 </strong><span style="color: rgb(51, 51, 51); background-color: rgb(255, 255, 255);">그러면 요렇게 먹음직스러운 소시지 피자빵이 완성된답니다 :)</span></p><p><img src="https://market-lion.koyeb.app/api/files/08-bbangradise/pizzabreadfinish.jpg"></p>',
        type: 'recipe',
        views: 3,
        user: {
          _id: 3,
          name: 'z김제빵사Z지존',
          profile: 'profile03.png',
        },
        createdAt: '2024.04.23 02:24:03',
        updatedAt: '2024.04.23 02:24:03',
        seller_id: null,
      },
      {
        _id: 7,
        title: '런던베이글 저리 비켜',
        extra: 'bagel.jpg',
        content:
          '<p>안녕하세요 빵라다이스 주민 여러분~!</p><p>오늘은 런던베이글 저리가라할 베이글 레시피를 들고왔답니다! 어렵지 않으니 집에서 한 번 따라해보세용</p><p><br></p><p> <strong>재료:</strong></p><ul><li>강력분 500g</li><li>설탕 10g</li><li>소금 10g</li><li>이스트 5g</li><li>물 310g</li><li>올리브 오일 20g (옵션)</li><li>베이킹소다 8g</li><li>물 800g (데치는 용)</li><li>설탕 40g (데치는 용)</li><li>토핑 (선택사항): 참깨, 케첩, 머스타드 등</li><li><br></li></ul><p><strong>조리 단계:</strong></p><p><br></p><p><strong>1. 반죽 만들기:</strong></p><ol><li>강력분, 설탕, 소금, 이스트를 믹싱볼에 넣고 섞어줍니다.</li><li>물을 조금씩 넣으면서 부드러운 반죽이 될 때까지 믹싱합니다.</li><li>반죽이 뭉쳐질 때까지 손으로 반죽합니다.</li><li>반죽에 올리브 오일을 묻혀 줍니다.</li><li>반죽을 둥글게 만들어 믹싱볼에 넣고 랩으로 덮어 실온에서 약 1시간 30분 ~ 2시간 발효시킵니다.</li><li>반죽이 두 배 정도 부풀어 오르면 발효가 완료된 것입니다.</li></ol><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-1.jpg"></p><p><br></p><p><strong>2. 성형 및 데치기:</strong></p><ol><li>발효된 반죽을 10개의 동일한 크기로 나눕니다.</li><li>각 반죽을 둥글게 만들고 가운데에 구멍을 뚫습니다.</li><li>끓는 물에 베이킹소다와 설탕을 넣고 섞어줍니다.</li><li>성형된 반죽을 데치는 용 물에 15초 정도씩 데쳐줍니다.</li><li>데친 반죽을 물기를 제거하고 베이킹 시트에 올립니다.</li></ol><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-5.jpg"></p><p><br></p><p><strong>3. 굽기:</strong></p><ol><li>오븐을 200°C로 예열합니다.</li><li>베이글 위에 원하는 토핑을 뿌려줍니다.</li><li>베이글을 20-25분 정도 굽습니다.</li><li>베이글이 노릇노릇해지면 완성입니다.</li></ol><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-6.jpg"></p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/bagel.jpg"></p><p><br></p><p><strong>팁:</strong></p><ul><li>베이글 반죽은 밀가루 종류에 따라 물의 양이 조금 다를 수 있습니다. 반죽이 너무 끈적이거나 건조하면 물의 양을 조절해주세요.</li></ul><p><br></p><ul><li>베이글을 데칠 때 물이 너무 뜨거우면 반죽이 익어버릴 수 있으니 주의해야 합니다.</li></ul><p><br></p><ul><li>베이글 위에 다양한 토핑을 뿌려 즐겨보세요. 참깨, 케첩, 머스타드, 치즈 등 원하는 토핑을 사용하면 됩니다.</li></ul><p><br></p><ul><li>베이글은 갓 구운 것이 가장 맛있습니다. 하지만 남은 베이글은 토스터에 굽거나 전자레인지에 데쳐서 맛있게 즐길 수 있습니다.</li></ul><p><br></p><p><br></p>',
        type: 'recipe',
        views: 2,
        user: {
          _id: 3,
          name: 'z김제빵사Z지존',
          profile: 'profile03.png',
        },
        createdAt: '2024.04.24 00:47:25',
        updatedAt: '2024.04.24 00:47:25',
        seller_id: null,
      },
      {
        _id: 8,
        title: '체리파이를 만들어 봤는데..',
        extra: 'cherrypie.jpg',
        content:
          '<p>빵라다이스 주민 여러분 제가 오늘 체리파이를 만들어 봤거든요?!</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/cherrypie-1.jpg"></p><p><br></p><p>근데 이게 사진에서도 보이겠지만 저희 집 주방 실내 온도가 좀 높았던 건지 반죽이 힘이 없어서 모양 내기 엄청 힘들더라구요..</p><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/cherrypie-2.jpg"></p><p><br></p><p>어쨌든 이렇게 완성은 되었는데.. 실내 온도 맞추기가 생각보다 힘드네요..?</p><p><br></p><p>레시피는 이 영상을 참고했습니다</p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/XxEaTIZU9cI?showinfo=0"></iframe><p><br></p>',
        type: 'recipe',
        views: 2,
        user: {
          _id: 10,
          name: '신선타이거',
          profile: 'profile10.png',
        },
        createdAt: '2024.04.25 10:08:48',
        updatedAt: '2024.04.25 10:08:48',
        seller_id: null,
      },
      {
        _id: 9,
        title: '영화 카모메식당 속 그 시나몬롤!',
        extra: 'cinnamonroll.jpg',
        content:
          '<p>빵라다이스 주민 여러분! 혹시 카모메식당 이라는 영화를 아시나요ㅎㅎ </p><p><br></p><p>저는 개인적으로 정말 좋아해서 여러 번 봤던 영화인데요, 그 영화에 나오는 시나몬롤이 볼 때마다 너무 먹고싶었거든요ㅎㅎㅎ </p><p><br></p><p>그래서 만들어본 시나몬롤!</p><p><br></p><p>먹어보니까 정석적인 맛으로 잘 나온 것 같아서 이렇게 레시피 소개해드리러 왔습니다 ㅎㅎ </p><p><br></p><p>다들 한 번 만들어보세요~!!</p><p><br></p><p><strong>재료:</strong></p><p><br></p><p><strong>도우:</strong></p><ul><li>밀가루 300g</li><li>우유 180ml</li><li>달걀 1개</li><li>이스트 5g</li><li>설탕 30g</li><li>소금 3g</li><li>버터 30g</li></ul><p><br></p><p><strong>필링:</strong></p><ul><li>무염버터 50g</li><li>황설탕 80g</li><li>시나몬 가루 2큰술</li></ul><p><br></p><p><strong>글레이즈:</strong></p><ul><li>가루설탕 100g</li><li>우유 30ml</li></ul><p><br></p><p><strong>선택 토핑:</strong></p><ul><li>아몬드, 호두, 피칸넛 등 견과류</li><li>건포도, 크랜베리 등 말린 과일</li></ul><p><br></p><p><br></p><p><strong>조리 단계:</strong></p><p><br></p><p><strong>1. 도우 만들기:</strong></p><ol><li>따뜻한 우유 (37~40°C) 에 이스트와 설탕을 넣고 5분 정도 놓아 이스트를 활성화시킵니다.</li><li>밀가루, 소금을 넓은 용기에 넣고 섞습니다.</li><li>활성화된 이스트 액체와 달걀을 넣고 손으로 반죽합니다.</li><li>반죽이 부드러워질 때까지 10분 정도 반죽합니다.</li><li>반죽이 부드러워지면 버터를 넣고 다시 5분 정도 반죽합니다.</li><li>반죽이 윤기가 나고 부드러워지면 반죽 공을 만들어 깨끗한 용기에 넣고 실온에서 1시간 30분 정도 1차 발효를 시킵니다.</li><li>반죽이 2배 정도로 불어오르면 완료입니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-1.jpg"></p><p><br></p><p><strong>2. 필링 만들기:</strong></p><ol><li>무염버터를 실온으로 녹여줍니다.</li><li>황설탕과 시나몬 가루를 넣고 잘 섞어줍니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-2.jpg"></p><p><br></p><p><strong>3. 성형 및 2차 발효:</strong></p><ol><li>1차 발효가 끝난 반죽을 밀대로 펴서 40x30cm 크기의 직사각형 모양으로 만듭니다.</li><li>녹인 버터를 반죽 전체에 골고루 발라줍니다.</li><li>시나몬 필링을 반죽 전체에 골고루 펴 바릅니다.</li><li>반죽을 긴 쪽을 기준으로 밀대로 단단하게 말아줍니다.</li><li>말아 만든 반죽을 3cm 두께로 칼로 잘라줍니다.</li><li>잘라낸 반죽을 오븐 팬에 나란히 놓고 30분 정도 2차 발효를 시킵니다.</li><li>반죽이 1.5배 정도 불어오르면 완료입니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-4.jpg"></p><p><br></p><p><strong>4. 구우기:</strong></p><ol><li>오븐을 180°C로 예열합니다.</li><li>2차 발효가 끝난 시나몬롤에 글레이즈를 바릅니다.</li><li>예열된 오븐에서 20~25분 정도 구워줍니다.</li><li>시나몬롤이 노릇노릇하게 구워지면 완료입니다.</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/baking-6.jpg"></p><p><br></p><p><strong>5. 완성 및 토핑:</strong></p><ol><li>구운 시나몬롤을 식힌 후 원하는 토핑을 올려 장식합니다.</li><li>따뜻한 커피나 우유와 함께 즐겨보세요!</li></ol><p><br></p><p><img src="https://api.frontendschool.shop/api/files/08-bbangradise/cinnamonroll.jpg"></p><p><br></p><p><strong>팁:</strong></p><ul><li>시나몬롤 속에 견과류나 말린 과일을 넣어 더욱 풍부한 맛을 즐길 수 있습니다.</li><li>글레이즈 대신 크림치즈 프로스팅이나 초콜릿 가나슈를 사용해도 좋습니다.</li><li>시나몬롤을 구울 때 오븐 설정 온도와 시간은 오븐마다 다를 수 있으니 참고하세요.</li></ul><p><br></p><p><br></p><p>영상이 편하신 분들을 위해 유튜브에도 업로드해두었으니 영상도 한번 보시고 좋아요와 구독도 해주시면 감사하겠습니다^^</p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/HUGxwHwZxsw?showinfo=0"></iframe><p><br></p><p><br></p>',
        type: 'recipe',
        views: 2,
        user: {
          _id: 8,
          name: '태양의손',
          profile: 'profile08.jpeg',
        },
        createdAt: '2024.04.25 10:25:14',
        updatedAt: '2024.04.25 10:25:14',
        seller_id: null,
      },
    ],
    // 코드
    code: [],
    // 설정
    config: [],
  };
};
