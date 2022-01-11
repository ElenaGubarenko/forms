// import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const valuesInForm = []

const valuesInFormReducer = createReducer(valuesInForm, {
  [actions.addInputFormValue]: (state, action) => {

    const filtredState = state.filter( (element) => {
   return element.id !== action.payload.id
 })
   return [...filtredState, action.payload]
  },

  [actions.cleanValuesInFormReducer]: (state, action) => {
    return []
  }

})

export default valuesInFormReducer


