import styles from "./FormsList.module.css"
import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"
import InputInForm from '../InputInForm'
import uniqid from 'uniqid';

export default function FormsList() {
  const forms = useSelector(selectors.forms)
    const dispatch = useDispatch()
  const sortedFormValues = useSelector(selectors.sortFormsValuesByIdAscending)
  const inputId = uniqid()
  const [disabled, setDisabled] = useState(false)
  // const [formName, setFormName] = useState('')

  const addNewFilledForm = () => {
    const filledFormId = uniqid()
    
    const newFilledForm = [filledFormId, sortedFormValues]
    dispatch(operations.addFilledForm(newFilledForm))
    dispatch(operations.cleanValuesInFormReducer())
  }

    const removeForm = (formId) => {
    dispatch(operations.removeForm(formId))
  }

  return (
       <div className={styles.MainDiv}>
      {
        forms.map(form =>
          <div className={styles.FillTheFormDiv}>
            {
              form[2] ?  <p className={styles.Text}>Form name: {form[2]}</p> : null
            }
             <ul className={styles.FormList}>
            {form[3].map(element =>
            
                <li className={styles.FormListItem}><p className={styles.FieldName}>{element.value}:  </p>           <InputInForm formName={form[2]}
                    data={element.value}
                    id={element.id}></InputInForm>
                </li>
             
              )} </ul>
            <div className={styles.ButtonsDiv}>
            <button disabled={sortedFormValues.length===0 ? !disabled: disabled
            } className={styles.AcceptForm} onClick={addNewFilledForm} type="button">Accept form</button>
            <button className={styles.RemoveForm} onClick={()=>removeForm(form[0])} type="button">Remove form</button></div>
          </div>
          )
      }
            </div>
     
  )
}
