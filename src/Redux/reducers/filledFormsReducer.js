import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const filledFormes = []

const filledFormsReducer = createReducer(filledFormes, {
  [actions.addNewFilledForm]: (state, action) => {
        return [...state, action.payload] 
  },
  [actions.removeFormFromList]: (state, action) => {

        const filtredState = state.filter( (element) => {
   return element[0] !== action.payload
 })
    return [...filtredState]
  }
})

export default filledFormsReducer