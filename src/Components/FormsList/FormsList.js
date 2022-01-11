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

// console.log(formName.map(element=>))

  return    (
    <div className={styles.MainDiv}>
      {
        forms.map(form =>
          <div>
            {/* {()=>setFormName(form[2])} */}
            <p>{form[2]}</p>
            {form[3].map(element =>
              <ul>
                <li>{element.value}
                  <InputInForm formName={form[2]}
                    data={element.value}
                    // number={form[2]}
                    id={element.id}></InputInForm></li>
              </ul>
            )}
            <button onClick={addNewFilledForm} type="button">accept form</button>
            <button onClick={()=>removeForm(form[0])} type="button">remove form</button>
          </div>
          )
      }



      {/* {forms!=='' ? 
          forms.map(element =>
            <div>
            {
          element[1] !=='' ?
         <div> <p>Form name: {element[0]}</p>
            <ul>
              {element[1].map(item =>
            <li key={element[1].indexOf(item)}>
                  <p>{item.value}</p>
                  <InputInForm formName={element[0]} data={item.value} id={element[1].indexOf(item)}></InputInForm>
                  </li>
                )}
            </ul>
                    <button onClick={addNewFilledForm} type="button">accept form</button>
                    <button onClick={()=>removeForm(element[0])} type="button">remove form</button>
                  </div>
                  : null}
            </div>
       
        )
        : null */}
      {/* } */}
            </div>
     
  )
}
