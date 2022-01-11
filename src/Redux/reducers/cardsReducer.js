import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const cards = []

const cardsReducer = createReducer(cards, {
  [actions.addNewCard]: (state, action) => {
          return [...state, action.payload] 
  },
  
  [actions.removeCard]: (state, action) => {
    const filtredState = state.filter((element) => {
       return  element[0] !== action.payload 
    })
     return [...filtredState]
  }

})

export default cardsReducer