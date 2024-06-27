import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface InitialState {
  userList: [];
  isLoading: Boolean;
  number: Number;
}

const initialState: InitialState = {
  userList: [],
  isLoading: false,
  number: 0,
};

export const fetchUsers = createAsyncThunk("user/userList", async (url) => {
  const request = await fetch("url");
  const responeData = await request.json();
  return responeData;
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.number = action.payload;
      console.log(state)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload;
      });
  },
});

export default userSlice.reducer;
