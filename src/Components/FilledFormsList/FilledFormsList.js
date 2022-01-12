import styles from "./FilledFormsList.module.css"
import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"

export default function FilledFormsList() {
  const filledForms = useSelector(selectors.filledForms)
  const dispatch = useDispatch()
  
  const removeFormFromList = (id) => {
    dispatch(operations.removeFormFromList(id))
  }


  return (
  <>
   
        <div className = {styles.MainDiv
    } >
      {
          filledForms.map(element =>
                      element? 
          <div className={styles.FormDiv}>
                {element[1][0].formName ?  <p className={styles.Text}>Form name: {element[1][0].formName}</p> : null}   
          <ul className={styles.FormValuesList}>
            {element[1].map(form =>
            
              <li className={styles.FormValue}>
                <p className={styles.FormLine}>{form.fieldName}: </p>
                <p className={styles.FormLine}>{form.value}</p>
               </li>
             
              )}  </ul>
               <button className={styles.RemoveButton} type="button" onClick={()=>removeFormFromList(element[0])}>Remove</button>
         </div> : null
          )
          }
      </div> 
      
  </>
     
  )
}
