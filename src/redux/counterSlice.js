import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const initialState = {
  count: 1,
};

// export const counterReducer = (state = initialState, action) => {
//   console.log("action", action);
//   switch (action.type) {
//     case Types.increaseCount: {
//       return {
//         count: (state.count += action.payload),
//       };
//     }
//     case Types.decreaseCount: {
//       return {
//         count: (state.count -= action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // action : name/incrementCount
  reducers: {
    incrementCount: (state, action) => {
      console.log("action", action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += action.payload;
    },
    decrementCount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { incrementCount, decrementCount } = counterSlice.actions;

export default counterSlice.reducer;

export const countSelector = createSelector(
  (state) => {
    return state.count;
  },
  (data) => {
    return data.count;
    // console.log("data", data);
  }
);
