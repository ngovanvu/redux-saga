import { countSelector, decrementCount, incrementCount } from "./counterSlice";
import { takeEvery, put, debounce, delay, takeLatest, all, fork, call, select } from "redux-saga/effects";
import { addTodoAction } from "./todosSlice";

export function* increaseSaga() {
  console.log("Hello Sagas!");
  yield takeLatest("INCREASE_COUNT_SAGA", increaseCountSaga);
}

export function* decreaseSaga() {
  yield takeLatest("DECREASE_COUNT_SAGA", decreaseCountSaga);
}
export function* fetchApi() {
  yield takeLatest("FETCH_API_SAGA", getApiAllTodo);
}
//generator function
// action : type,payload
function* increaseCountSaga(action) {
  //   if (action.payload === 5) {
  // yield delay(1000);
  yield put(incrementCount(action.payload));
  //   }
}
function* decreaseCountSaga(action) {
  if (action.payload === 2) {
    yield put(decrementCount(10));
  }
}
function* getApiAllTodo(action) {
  const count = yield select(countSelector);
  console.log(count);
  const res = yield call(fetchApiTodos);
  yield put(addTodoAction(res[count]));
  console.log(res);
}

//all chay tất cả generator function có trong nó, kèm thêm fork để chạy cùng với nhau
export default function* rootSaga() {
  yield all([yield fork(increaseSaga), yield fork(decreaseSaga), yield fork(fetchApi)]);
}

export const fetchApiTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json());
  return response;
};
fetchApiTodos();
