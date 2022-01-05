// import { createSelector } from "@reduxjs/toolkit"

const getAllInputs = state => state.inputsReducer

const sortInputsValuesByIdAscending = state => {
  const values = [...state.valuesReducer]
  
  return values.sort((a, b) => a.id > b.id ? 1 : -1)
}
  


export default {
  getAllInputs,
  sortInputsValuesByIdAscending
}