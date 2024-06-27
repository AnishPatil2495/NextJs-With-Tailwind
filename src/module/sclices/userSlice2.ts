import { ActionFromReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserList2 = createAsyncThunk("user/userList2", async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const response = await request.json();

  console.log(response)
  return response;
});

interface UserListInterface {
    id: number;
    name: string;
}

interface InitialState {
  userList: UserListInterface[];
  isLoading: false | true;
  userDetail: UserListInterface | undefined
}

const initialState: InitialState = {
  userList: [],
  isLoading: false,
  userDetail: undefined
};

const userSlice = createSlice({
  name: "userSlice2",
  initialState,
  reducers: {
    userDetailAction: (state, action) => {
        let id = action.payload;
        
        state.userDetail = state.userList.find((elem) => {
            if (elem.id == id) {
                return elem;
            };
        });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserList2.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    });
    builder.addCase(fetchUserList2.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { userDetailAction } = userSlice.actions;

export default userSlice.reducer;
