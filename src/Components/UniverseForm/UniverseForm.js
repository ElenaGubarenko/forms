import styles from "./UniverseForm.module.css"
import { useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"
import Input from '../Input'

export default function UniverseForm() {
 const [inputNumber, setInputNumber] = useState(1)
 const [cardName, setCardName] = useState('')
//  const [inputValue, setInputValue]=useState('')
//  const [arrOfValues, setArrOfValues] = useState([])
  const dispatch = useDispatch()
  // const [allInputsValues, setAllIputsValues] = useState([])
  const [inputComponents, setInputComponents] = useState([])
  const sortedValues = useSelector(selectors.sortInputsValuesByIdAscending)

  const handleCardName = e => {
setCardName(e.target.value)
  }

  const assignNumberToInput = () => {
    setInputNumber((prevState) => {
      return prevState + 1
    })
  }

  const createInput = () => {
        // console.log(arrOfValues)
    assignNumberToInput()
      setInputComponents([...inputComponents, <Input id={inputNumber} > </Input>])
  }
  
  const addNewCard = e => {
    e.preventDefault();
    const newCardWithName = [
cardName, inputComponents
    ]
    dispatch(operations.addCard(newCardWithName))
    setCardName('')
  }

console.log(sortedValues)

  return (
    <div className={styles.MainDiv}>
      <p>Укажите поля будущей формы:</p>
      <form > 
        <input onChange={handleCardName} value={cardName} type="text" id="0" key="0" placeholder="Имя будущей карточки"></input>
       {inputComponents}
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

