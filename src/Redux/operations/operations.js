import actions from "../actions/actions"

const getAllInputs = (inputs) => (dispatch) => {
  dispatch(actions.addInputFromUniverseForm(inputs))
}

export default {
  getAllInputs,
}
