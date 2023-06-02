import { fetchAllTodos } from "./action";
import { Types } from "./types";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isDone: false,
};

// export const todosReducer = (state = initialState, action) => {
//   //   console.log("action", action);
//   switch (action.type) {
//     case Types.addTodo: {
//       return {
//         todos: [...state.todos, action.payload],
//       };
//     }
//     case Types.deleteTodo: {
//       return {
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  // action : name/incrementCount tu custom type
  reducers: {
    addTodoAction: (state, action) => {
      console.log("action", action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos = [...state.todos, action.payload];
    },
    deleteTodoAction: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.pending, (state, action) => {
      state.isLoading = true;
      // Add user to the state array
      console.log("peding", { state, action });
    });
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      // Add user to the state array
      state.todos = action.payload;
      state.isLoading = false;
      console.log("fulfilled", { state, action });
    });
    builder.addCase(fetchAllTodos.rejected, (state, action) => {
      state.todos = [];
      state.isLoading = false;
      state.isError = true;
      // Add user to the state array
      console.log("rejected", { state, action });
    });
  },
});

export const { addTodoAction, deleteTodoAction } = todosSlice.actions;

export default todosSlice.reducer;
