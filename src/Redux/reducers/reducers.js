import inputsReducer from "./inputsReducer"
import cardsReducer from './cardsReducer'
import valuesReducer from './valuesReducer'
import { combineReducers } from "redux"

export default combineReducers({
  inputsReducer,
  cardsReducer,
  valuesReducer
})
