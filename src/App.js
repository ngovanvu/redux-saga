import "./App.css";
import { store } from "./redux/store";
// import { increaseCount, decreaseCount, addTodo, deleteTodo, addTodoAsync } from "./redux/action";
import { connect, useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import axios from "axios";
import { decrementCount, incrementCount } from "./redux/counterSlice";
import { addTodoAction, deleteTodoAction } from "./redux/todosSlice";
import { fetchAllTodos } from "./redux/action";

function App(props) {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todos);
  const countState = useSelector((state) => state.count.count);
  const { todos, isLoading, isError, isDone } = todosState;
  const [name, setName] = useState("");
  const handleIncrease = () => {
    dispatch({
      type: "INCREASE_COUNT_SAGA",
      payload: 1,
    }); //* tăng lên 5
  };
  const handleDescrease = () => {
    dispatch({
      type: "DECREASE_COUNT_SAGA",
      payload: 2,
    }); //* giảm đi 2
  };
  const handleOnchange = (e) => {
    setName(e.target.value);
  };
  // const fetchTodo = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log(res);
  // };
  const handleAddTodo = () => {
    // dispatch(
    //   addTodo({
    //     name,
    //     id: Math.random(),
    //   })
    // );
    // fetchTodo();
    // props.addTodo({
    //   name,
    //   id: Math.random(),
    // });
    dispatch(
      addTodoAction({
        name,
        id: Math.random(),
      })
    );
    setName("");
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };
  const handleAddAsync = () => {
    dispatch({
      type: "FETCH_API_SAGA",
    });
  };
  return (
    <div className="App">
      <h1>Redux turtorials</h1>
      <h4>{countState}</h4>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDescrease}>Giảm</button>
      <div>
        <button onClick={handleAddAsync}>async</button>
        <input value={name} onChange={handleOnchange} />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      {isLoading ? (
        <div>...lodaing</div>
      ) : (
        <Fragment>
          {todos.map((todo, index) => {
            return (
              <div key={todo.id}>
                {index} - {todo.title}
                <span onClick={() => handleDeleteTodo(todo.id)}>X</span>
              </div>
            );
          })}
          {isError && <div>Error</div>}
        </Fragment>
      )}
    </div>
  );
}
// function mapStateToProps(state) {
//   return {
//     count: store.getState().count.count,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: (data) => store.dispatch(addTodoAction(data)),
//     decreaseCount: (data) => store.dispatch(decreaseCount(data)),
//   };
// }
export default App;
