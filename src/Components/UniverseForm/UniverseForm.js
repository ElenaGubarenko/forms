import styles from "./UniverseForm.module.css"
import { useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"
import Input from '../Input'
import uniqid from 'uniqid';

export default function UniverseForm() {
 const [inputNumber, setInputNumber] = useState(1)
 const [cardName, setCardName] = useState('')
  const dispatch = useDispatch()
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
    assignNumberToInput()
      setInputComponents([...inputComponents, <Input id={inputNumber} > </Input>])
  }
  
  const addNewCard = e => {
    e.preventDefault();
    const cardId = uniqid()
    const cardNumber = inputNumber
    const newCardWithName = [ cardId, cardNumber,
cardName, sortedValues
    ]
    dispatch(operations.addCard(newCardWithName))
    setCardName('')
  }

  const addNewForm = e => {
    e.preventDefault();
    const formId = uniqid()
    const formNumber = inputNumber
    const newFormWithName = [formId, formNumber,
cardName, sortedValues
    ]
    dispatch(operations.addNewForm(newFormWithName))
    setCardName('')
  }

  return (
    <div className={styles.MainDiv}>
      <p>Укажите поля будущей карточки или формы:</p>
      <form > 
        <input onChange={handleCardName} value={cardName} type="text" id="0" key="0" placeholder="Имя будущей карточки или формы"></input>
       {inputComponents}
               <button onClick={createInput} type="button">
          Добавить поле
        </button>
        <button onClick={addNewCard} type="button">
          Создать карточку
        </button>
           <button onClick={addNewForm} type="button">
          Создать форму
        </button>
      </form>
    </div>
  )
}

