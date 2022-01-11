import styles from "./CardsList.module.css"
import { useState , useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import operations from "../../Redux/operations/operations"
import selectors from "../../Redux/selectors/selectors"
import FilledFormsList from '../FilledFormsList'

export default function CardsList() {
  const cards = useSelector(selectors.cards)
      const dispatch = useDispatch()

   const removeCard = (cardName) => {
    dispatch(operations.removeCard(cardName))
  }

// console.log(cards)

  return    (
    <div className={styles.MainDiv}>
      <FilledFormsList></FilledFormsList>
      {
        cards.map(card => 
          <div>
            <p>{card[2]}</p>
            {card[3].map(element =>
              <ul>
                <li>{element.value}</li>
              </ul>
            )}
             <button type="button" onClick={() => removeCard(card[0])} >remove</button> 
          </div>
          
          )
      }
      {/* {
        cards.map(element =>
          <div>
            <p>Card name: {element[0]}</p>
          <ul>
              {element[1].map(item => 
               <li key={item.id}>{item.value}</li>)}
              <button type="button" onClick={() => removeCard(element[0])} >remove</button> 
            </ul>
          </div>
        )
      } */}
            </div>
     
  )
}
