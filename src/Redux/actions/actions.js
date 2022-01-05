import { createAction } from "@reduxjs/toolkit"

const addInputFromUniverseForm = createAction("addInputInUniverseForm")

const addNewCard = createAction("addNewCard")

const addValue = createAction('addValue')

export default {
  addInputFromUniverseForm,
  addNewCard,
  addValue
}
