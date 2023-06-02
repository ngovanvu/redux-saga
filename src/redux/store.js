import counterReducer from "./counterSlice";
import rootSaga from "./saga";
import todosReducer from "./todosSlice";
//! store chứa reducer
//! dispatch là thằng đưa action đến với store
//! getState là nhận tất cả các giá trị mà reducer trả về
//! middleware đứng trên dispatch ở giữa action và store nó có thể chặn những thằng action mà nó muốn chặn (nó như một thằng bảo vệ giữa action xấu với store)
//! next(action) cho phép action đó chạy qua vào store
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
// setting redux saga vs redux toolkit
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todos: todosReducer,
  },
  middleware,
});
sagaMiddleware.run(rootSaga);
