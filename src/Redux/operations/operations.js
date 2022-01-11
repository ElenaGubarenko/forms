import actions from "../actions/actions"

const addInput = (input) => (dispatch) => {
   dispatch(actions.addInputFromUniverseForm(input))
}

const addCard = (allInputs) => (dispatch) => {
  dispatch(actions.addNewCard(allInputs))
} 

const addValue = (value) => (dispatch) => {
  dispatch(actions.addValue(value))
}

const addNewForm = (value) => (dispatch) => {
  dispatch(actions.addNewForm(value))
}

const addInputFormValue = (value) => (dispatch) => {
  dispatch(actions.addInputFormValue(value))
}

const addFilledForm = (filledForm) => (dispatch) => {
  dispatch(actions.addNewFilledForm(filledForm))
} 

const removeFormFromList = (id) => (dispatch) => {
  dispatch(actions.removeFormFromList(id))
}

const removeForm = (formId) => (dispatch) => {
  dispatch(actions.removeForm(formId))
}

const removeCard = (carId) => (dispatch) => {
  dispatch(actions.removeCard(carId))
}

const cleanValuesInFormReducer = () => (dispatch) => {
  dispatch(actions.cleanValuesInFormReducer())
}

export default {
  addInput,
  addCard,
  addValue,
  addNewForm,
  addInputFormValue,
  addFilledForm,
  removeFormFromList,
  removeForm,
  removeCard,
  cleanValuesInFormReducer
}
