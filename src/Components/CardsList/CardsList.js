import styles from "./CardsList.module.css"
import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"
import FilledFormsList from '../FilledFormsList'

export default function CardsList() {
  const cards = useSelector(selectors.cards)
  const dispatch = useDispatch()
  const filledForms = useSelector(selectors.filledForms)

   const removeCard = (cardName) => {
    dispatch(operations.removeCard(cardName))
  }

  return ( 
    <>
   
    <div className={styles.MainDiv}>
       <FilledFormsList></FilledFormsList> 
      {
        cards.map(card => 
          <div className={styles.CardDiv}>
            {
              card[2] ? <p className={styles.Text}>Card name: {card[2]}</p> : null
              
           }       <ul className={styles.CardValuesList}>
            {card[3].map(element =>
        
                <li className={styles.CardValue}>{element.value}</li>
            
            )}  </ul>
             <button className={styles.RemoveButton} type="button" onClick={() => removeCard(card[0])} >Remove</button> 
          </div>
        
          )
      }
   
            </div>
      </>
  )
}
