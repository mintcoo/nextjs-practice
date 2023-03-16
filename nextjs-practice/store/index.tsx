// 전체적으로 next-redux-wrapper 공식문서참고함
import { configureStore, ThunkAction, Action, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import persistedReducer from "./reducer";
import { persistStore } from "redux-persist";

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
  });
// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: true,
// });
// const setupStore = (context: any): EnhancedStore => store;

// const makeStore: MakeStore<any> = (context: any) => setupStore(context);

// 새로고침해도 데이터 보존
// export const persistor = persistStore(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type RootState = ReturnType<AppStore["getState"]>;

/** useDispatch는 thunkAction에 대해서 타입에러를 발생시키므로 커스터 마이징해서 사용합니다. */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/** useSelector를 사용할 경우, 매번 state의 타입을 지정해줘야 하기 때문에 커스터 마이징해서 사용합니다. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 공식문서 참고함
export const wrapper = createWrapper<AppStore>(makeStore);
