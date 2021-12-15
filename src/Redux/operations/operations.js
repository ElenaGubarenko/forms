import actions from "../actions/actions"

const addInput = (input) => (dispatch) => {
   dispatch(actions.addInputFromUniverseForm(input))
}

const addCard = (allInputs) => (dispatch) => {
  dispatch(actions.addNewCard(allInputs))
}

export default {
  addInput,
  addCard
}
