import styles from "./Input.js.module.css"
import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"

const Input = ({id}) => {
  const [inputValue, setInputValue] = useState('')
  const [disabledAddValue, setDisabledAddValue] = useState(false)
    const [disabledInput, setDisabledInput] = useState(false)
  const [abledCorrect, setAbledCorrect] = useState(true)
    // const sortedValues = useSelector(selectors.sortInputsValuesByIdAscending)
  const dispatch = useDispatch()

    const handleInput = e => {
     setInputValue(e.target.value)
  }

  const addValue = () => {
    if (inputValue === '') return

    const newInputValue = { id: id, value: inputValue }
    
    dispatch(operations.addValue(newInputValue)) 

    setDisabledAddValue(true)
    setDisabledInput(true)
    setAbledCorrect(false)
  }

  const correctValue = () => {
    setDisabledAddValue(false)
    setAbledCorrect(true)
    setDisabledInput(false)
  }

  return <> <input disabled={disabledInput} onChange={handleInput} value={inputValue} type="text" placeholder="Имя поля"></input> <button disabled={disabledAddValue} type="button" onClick={addValue}>ok</button> <button disabled={abledCorrect} type="button" onClick={correctValue}>correct</button> </>
}
 
export default Input
