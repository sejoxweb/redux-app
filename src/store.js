import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import usersReducer from "./features/users/usersSlice";
import { questionsReducer } from "./features/questions/questionsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    questions: questionsReducer,
  },
});
