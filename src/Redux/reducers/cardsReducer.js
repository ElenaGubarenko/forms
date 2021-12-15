import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/actions"

const cards = []

const cardsReducer = createReducer(cards, {
  [actions.addNewCard]: (state, action) => {
        return [...state, action.payload] 
  }
})

export default cardsReducer