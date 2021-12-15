import { createAction } from "@reduxjs/toolkit"

const addInputFromUniverseForm = createAction("addInputInUniverseForm")

const addNewCard = createAction("addNewCard")

export default {
  addInputFromUniverseForm,
  addNewCard
}
