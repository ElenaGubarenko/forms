// import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const inputs = []

const inputsReducer = createReducer(inputs, {
  [actions.addInputFromUniverseForm]: (state, action) => action.payload,
})

export default inputsReducer