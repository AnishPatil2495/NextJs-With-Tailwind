import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./userSlice2"

const rootReducers = combineReducers({
    users: userReducers
})

export default rootReducers;