// import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const values = []

const valuesReducer = createReducer(values, {
  [actions.addValue]: (state, action) => {
        return [...state, action.payload] 
  }
})


export default valuesReducer