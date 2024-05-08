import styles from './cardsList.module.css'
import Task from './TaskCard'

export const CardsList = ( 
    { columnCards, addedDate }
    ) => {
  return (
    <ul className={styles.cardsList}>
        {columnCards.map((columnCard) => (
            <Task
                key={columnCard.id}
                columnCard={columnCard}
                addedDate={addedDate}
            />
            
        ))}
    </ul>
  )
}

export default CardsList