import styles from "./UniverseForm.module.css"
import { useState } from "react"

export default function UniverseForm() {
  // const [inputNumber, setInputNumber] = useState(0)
  const [inputs, setInputs] = useState([])

  const setInputsFunc = () => {
    setInputs((prevState) => {
      return [...prevState, <input type="text" placeholder="Имя поля"></input>]
    })
    console.log(inputs)
  }

  return (
    <div className={styles.MainDiv}>
      <p>Укажите поля будущей формы:</p>
      <form>
        <input type="text" placeholder="Имя поля"></input>
        {inputs.map((input) => input)}
        <button onClick={setInputsFunc} type="button">
          Добавить поле
        </button>
        <button type="button">Создать карточку</button>
      </form>
    </div>
  )
}
