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
