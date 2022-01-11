// import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const values = []

const valuesReducer = createReducer(values, {
  [actions.addValue]: (state, action) => {

    const filtredState =  state.filter( (element) => {
   return element.id !== action.payload.id
 })
   return [...filtredState, action.payload]

  }

})

export default valuesReducer


