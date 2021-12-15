import inputsReducer from "./inputsReducer"
import cardsReducer from './cardsReducer'
import { combineReducers } from "redux"

export default combineReducers({
  inputsReducer,
  cardsReducer
})
