// 전체적으로 next-redux-wrapper 공식문서참고함
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

// 주석해제하면서 다 띄워놓고 해보자
// const makeStore = () =>
//   configureStore({
//     reducer,
//     devTools: true,
//   });

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;