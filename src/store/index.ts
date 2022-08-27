import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from "./slices/userSliсe"
import statusesReducer from "./slices/statusesSlice"
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
  user: userReducer,
  statuses: statusesReducer,
})

const persistConfig = {
  key: "root",
  storage,
  blacklist: [ "statuses" ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
export default store