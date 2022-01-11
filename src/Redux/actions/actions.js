import { createAction } from "@reduxjs/toolkit"

const addInputFromUniverseForm = createAction("addInputInUniverseForm")

const addNewCard = createAction("addNewCard")

const addValue = createAction('addValue')

const addNewForm = createAction('addNewForm')

const addInputFormValue = createAction('addInputFormValue')

const addNewFilledForm = createAction('addNewFilledForm')

const removeFormFromList = createAction('removeFormFromList')

const removeForm = createAction('removeForm')

const removeCard = createAction('removeCard')

const cleanValuesInFormReducer = createAction('cleanValuesInFormReducer')

export default {
  addInputFromUniverseForm,
  addNewCard,
  addValue,
  addNewForm,
  addInputFormValue,
  addNewFilledForm,
  removeFormFromList,
  removeForm,
  removeCard,
  cleanValuesInFormReducer
}
