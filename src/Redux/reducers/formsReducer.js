import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const forms = []

const formsReducer = createReducer(forms, {
  [actions.addNewForm]: (state, action) => {
        return [...state, action.payload] 
  },
  [actions.removeForm]: (state, action) => {
        const filtredState = state.filter( (element) => {
   return element[0] !== action.payload
 })
    return [...filtredState]
  }
})


export default formsReducer