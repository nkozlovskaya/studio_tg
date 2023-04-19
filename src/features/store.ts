import { combineReducers, configureStore } from "@reduxjs/toolkit";
import changeColor from "./reducers/changeColorSlice";

const rootReducer = combineReducers({
  changeColor,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
