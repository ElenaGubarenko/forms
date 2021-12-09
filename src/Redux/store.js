import { configureStore } from "@reduxjs/toolkit"
import combinedReducers from "./reducers/reducers"

const store = configureStore({
  reducer: combinedReducers,
  devTools: process.env.NODE_ENV === "development",
})

export default store
