import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import countSlice from "./features/countSlice"

// 리듀서들을 합쳐주는곳
const combinedReducer = combineReducers({
  counter: countSlice,
});

// Hydrate와 위에서 합친 reducer들을 rootReducer에 세팅
const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducer(state, action);
};

export default rootReducer;
