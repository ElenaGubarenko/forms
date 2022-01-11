import cardsReducer from './cardsReducer'
import valuesReducer from './valuesReducer'
import formsReducer from './formsReducer'
import valuesInFormReducer from './valuesInFormReducer'
import filledFormsReducer from './filledFormsReducer'
import { combineReducers } from "redux"

export default combineReducers({
  cardsReducer,
  valuesReducer,
  formsReducer,
  valuesInFormReducer,
  filledFormsReducer
})
