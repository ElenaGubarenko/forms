import styles from "./InputInForm.js.module.css"
import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"

const InputInForm = ({ id, data, formName }) => {
     const [inputInFormValue, setinputInFormValue] = useState('')
  const [disabledAddValue, setDisabledAddValue] = useState(false)
    const [disabledInput, setDisabledInput] = useState(false)
  const [abledCorrect, setAbledCorrect] = useState(true)
  const dispatch = useDispatch()

    const handleInput = e => {
     setinputInFormValue(e.target.value)
  }

  const addFormInputValue = () => {
    if (inputInFormValue === '') return

    const newInputInFormValue = {id, formName, fieldName: data, value: inputInFormValue }
    
    dispatch(operations.addInputFormValue(newInputInFormValue)) 

    setDisabledAddValue(true)
    setDisabledInput(true)
    setAbledCorrect(false)
  }

  const correctValue = () => {
    setDisabledAddValue(false)
    setAbledCorrect(true)
    setDisabledInput(false)
  }

  return <> <input disabled={disabledInput} onChange={handleInput} value={inputInFormValue} type="text" placeholder={data}></input> <button disabled={disabledAddValue} type="button" onClick={addFormInputValue}>ok</button> <button disabled={abledCorrect} type="button" onClick={correctValue}>correct</button> </>
}
 
export default InputInForm
