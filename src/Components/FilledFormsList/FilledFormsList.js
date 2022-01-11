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
    <div className={styles.MainDiv}>
      {
        filledForms.map(element =>
          <div>
          <p>{element[1][0].formName}</p>
           {element[1].map(form =>
            <div>
              <ul>
               <li>{form.fieldName}: {form.value}</li>
               </ul>
               
            </div>   
            )}
               <button type="button" onClick={()=>removeFormFromList(element[0])}>remove</button>
         </div>
          )
          }
            </div>
     
  )
}

//  <div>
//             <p>{form.formName}</p>
//           <ul>
//             <li>{form.fieldName}: {form.value }</li>
//             </ul>
//           </div>


  // {filledForms.map(formIndex => formIndex.map(form=>
  //       <div>
  //             <ul> 
  //                {/* <p>Form name: {form.formName}</p>  */}
  //           <li>
  //            <p>{form.fieldName}: </p> 
  //            <p>{form.value}</p> 
  //           </li>
  //         </ul>
  //         <button type="button" onClick={()=>removeFormFromList(form.id)}>remove</button>
  //       </div>
  //       ))}