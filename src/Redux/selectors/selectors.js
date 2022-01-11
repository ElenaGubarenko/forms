// import { createSelector } from "@reduxjs/toolkit"

const sortInputsValuesByIdAscending = state => {
  const values = [...state.valuesReducer]
  return values.sort((a, b) => a.id > b.id ? 1 : -1)
}

const cards = state => {
  return state.cardsReducer
}

const forms = state => {
return state.formsReducer
}

const sortFormsValuesByIdAscending = state => {
  const values = [...state.valuesInFormReducer]
  return values.sort((a, b) => a.id > b.id ? 1 : -1)
}

const filledForms = state => {
  return state.filledFormsReducer
}


export default {
  sortInputsValuesByIdAscending,
  cards,
  forms,
  sortFormsValuesByIdAscending,
  filledForms
}