import styles from "./UniverseForm.module.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"

export default function UniverseForm() {
  const [inputNumber, setInputNumber] = useState(1)
  const [inputs, setInputs] = useState([<input type="text" id="0" key="0" value="" placeholder="Имя будущей карточки"></input>])
  const dispatch = useDispatch()

  const assignNumberToInput = () => {
    setInputNumber((prevState) => {
      return prevState + 1
    })
  }

  const addNewInputInState = () => {
    setInputs((prevState) => {
      return [...prevState, <input type="text" id={inputNumber} key={inputNumber} value="" placeholder="Имя поля"></input>]
    })
  }

  const createInput = () => {
    assignNumberToInput()
    addNewInputInState()
  }

  const addNewCard = () => {
    dispatch(operations.getAllInputs(inputs))
  }

  return (
    <div className={styles.MainDiv}>
      <p>Укажите поля будущей формы:</p>
      <form>
        {inputs.map((input) => input)}
        <button onClick={createInput} type="button">
          Добавить поле
        </button>
        <button onClick={addNewCard} type="button">
          Создать карточку
        </button>
      </form>
    </div>
  )
}
