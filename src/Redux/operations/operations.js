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

export default {
  addInput,
  addCard,
  addValue
}
