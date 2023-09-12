import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      //immer js using internally here to update immutable way
      state.value = state.value + 1; //writing in a mutate manner, but it will automatically converto immutable manner
    },
    incrementByAmount: (state, action) => {
      console.log("action>>", action);
      state.value = state.value + action.payload;
    },
  },
});

// action creator
export const { increment, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

// reducers = (state, action)=>{
// if(action.type === "increment"){
//     return {...state, value: state.value+1}
// }
// }
