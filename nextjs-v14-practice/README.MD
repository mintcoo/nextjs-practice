## NextJS - V14

### Old vs New

- 올드버전은 pages로 router 세팅
- 새로운건 app을 활용해서 새로운 방법
- 하지만 둘다 사용해도 상관없으니 무리해서 바꿀필욘 X
- 새로운 신기능을 이제 app에서도 사용할 수 있다.

### 수동세팅

```react
// 수동으로 해보는 초기설정
1. npm init -y
2. JSON script license -> MIT
3. npm install react@latest next@latest react-dom@latest
4. app 폴더에 page.tsx or page.jsx 만들고
5. npm run dev 해보기 // 여기서 타입스크립트 tsx면 자동설치해줌

```

### useCallback

```react
  // 불필요한 렌더링을 방지하기 위해서인데 컴포넌트에 속성으로 들어가는 함수는 useCallback으로 감싸주는것이 좋다
  const onIncrement = useCallback(() => dispatch(increment()), []);
  const onDecrement = useCallback(() => dispatch(decrement()), []);
  // redux-thunk
  const onReduxThunk = useCallback(() => dispatch(fetchAsync("갔냐?")), []);
// 아래 버튼에 달린 함수들
  <button className="w-10 text-2xl border-2" onClick={onIncrement}>
    +
  </button>
  <button className="w-10 text-2xl border-2" onClick={onDecrement}>
    -
  </button>
  <button className="w-10 text-2xl border-2" onClick={onReduxThunk}>
    X
  </button>
```

## Routing

### Routes

![image-20240208234505093](C:\Users\han\Desktop\NextJS\nextjs-practice\nextjs-v14-practice\assets\image-20240208234505093.png)

- url명은 폴더를 만듦으로써 생성할 수 있다.
- 다만 안에 page.tsx가 없으면 url이 아니라 일반 컴포넌트로 쓸수 있음
- 스샷처럼 components란 폴더안에 page.tsx파일을 만들지 않았기에 일반 컴포넌트로 쓸 수 있음
- 사용자가 url로 보게되는 페이지는 page.tsx임 (이전 버전의 index.tsx와 용도가 같음)

### Not Found

- app폴더 안에 not-found.tsx 이름으로 만들어야함

### usePathname

![image-20240213144336881](C:\Users\han\Desktop\NextJS\nextjs-practice\nextjs-v14-practice\assets\image-20240213144336881.png)

- 이런 에러 발생 해결을 위해 가장 윗 줄에 'use client' 추가
- 왜 이런일이 일어나는지 다음거에 봐보자

## CSR vs SSR

- 순수 react만으로 하면 CSR인데 유저가 딱 도착했을때는 빈페이지뿐
- 브라우저가 자바스크립트 파일을 다운받고 난 후에야 렌더링됨
- 아무래도 첫 로딩이 좀 길수밖에 없다
- 그리고 검색엔진이 빈페이지를 볼수밖에 없음 자바스크립트를 실행시키지 않으니까

### NextJS

- NextJs로 빌드하면 자동으로 Default가 SSR이다
- 이미 완성된 html페이지기 때문에 자바스크립트가 활성화 되어있지 않아도 볼 수가 있다
- 사용자가 접근을 하면 어떠한 HTML을 주기 전에 next.js 는 server 즉 backend에서 application을 render 한다.
- !! use client를 썻지만 client단에서 렌더링 되는게아니라 server에서 렌더링되는 SSR시스템을 따른다. 이름 헷갈리니 주의
- 모든 컴포넌트와 페이지는 server, 즉 backend에서 렌더링된다!

** render란 javascript function을 가져와서 브라우저가 이해할 수 있는 HTML로 변환하는 작업

### Hydration

- Next.js는 초기 Html 파일을 먼저 전달하고 이후 HTML 요소들을 React 컴포넌트로 변환 및 이벤트리스너를 부착하여 React DOM에서 관리하게 한다. 이 과정을 Hydration(수분 보충)이라고 한다!!

- 처음에 SSR렌더링 이후 이제 react가 끼어듬
- 만약 JavaScript를 끄면 네이게이션 이동시 a anchor라서 페이지 전체 재렌더링이 일어나지만 JavaScript를 켜면 이제 전체 재렌더링이 아닌 바뀌는 부분만 바뀌는 Link를 이용한 React를 Component 사용
- 이 Link Component는 CSR이다
- 즉, 첫 페이지는 SSR로 Html 던져주고 후에 프레임워크가 load를 시작해서 CSR React App으로 바뀌는 느낌

![image-20240213160038895](C:\Users\han\Desktop\NextJS\nextjs-practice\nextjs-v14-practice\assets\image-20240213160038895.png)

![image-20240213160410036](C:\Users\han\Desktop\NextJS\nextjs-practice\nextjs-v14-practice\assets\image-20240213160410036.png)

- 이렇게 처음에는 그냥 0인 버튼을 렌더링해줘서 클릭해도 아무런 이벤트가 발생하지 않지만 후에 JavaScript가 로드되고 React Component가 된다면 onClick 이벤트가 연결된 버튼으로 바뀐다

!! 하지만 Hydrate되는 component는 맨위에 "use client"가 적힌 component들 뿐이다!! 이렇게 해야 다운받는 JavaScript양이 적어지고 최적화 및 성능에 좋다

!! "use client"가 적혀있지 않은 component들은 기본적으로 모두 server component다!
