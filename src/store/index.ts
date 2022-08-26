import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSliсe"
import statusesReducer from "./slices/statusesSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    statuses: statusesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
