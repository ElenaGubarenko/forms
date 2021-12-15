import styles from "./UniverseForm.module.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"

export default function UniverseForm() {
  const [arrOfValues, setArrOfValues] = useState([])
  
  const handleEvent = e => {
    setArrOfValues((prevState) => {
      return [...prevState, e.target.value]
    })
    // console.log(e.target.value)
  }

  // console.log(arrOfValues)

  const [inputNumber, setInputNumber] = useState(1)
  // const [inputs, setInputs] = useState([<input onChange={handleEvent} type="text" id="0" key="0" placeholder="Имя будущей карточки"></input>])
  const dispatch = useDispatch()
  const allInputs = useSelector(selectors.getAllInputs)

  const assignNumberToInput = () => {
    setInputNumber((prevState) => {
      return prevState + 1
    })
  }

  const addNewInputInState = () => {
    // setInputs((prevState) => [...prevState, <input  type="text" id={inputNumber} key={inputNumber} placeholder="Имя поля"></input>]
    // )
    // dispatch(operations.addInput(inputs))
      dispatch(operations.addInput( <input  type="text" id={inputNumber} key={inputNumber} placeholder="Имя поля"></input>))
  }

  // console.log(inputs)
  // console.log(allInputs)

  const createInput = () => {
    assignNumberToInput()
    addNewInputInState()
  }

  const addNewCard = e => {
        e.preventDefault();
    dispatch(operations.addCard(allInputs))
  }

  return (
    <div className={styles.MainDiv}>
      <p>Укажите поля будущей формы:</p>
      <form onSubmit={addNewCard}> 
        {allInputs.map((input) => input)}
        <button onClick={createInput} type="button">
          Добавить поле
        </button>
        <button type="submit">
          Создать карточку
        </button>
      </form>
    </div>
  )
}
