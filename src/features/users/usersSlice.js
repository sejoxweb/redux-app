import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//redux-thunk

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetch("http://localhost:3004/users");
    const users = await response.json();

    console.log("users>>>", users);
    return users;
  } catch (error) {
    console.log("error", error);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      console.log("action>>>", action);
      console.log("state>>>", state);
      state.loading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      console.log("action>>>", action);
      console.log("state>>>", state);
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [fetchUsers.rejected]: (state, action) => {
      console.log("action>>>", action);
      console.log("state>>>", state);
      state.loading = false;
      state.error = null;
    },
  },
});

// export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;
