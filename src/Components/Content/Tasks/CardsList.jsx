import styles from './cardsList.module.css'
import Task from './TaskCard'


export const CardsList = ( 
    { columnCards }
    ) => {
  return (
    <ul className={styles.cardsList}>
        {columnCards.map((columnCard) => (
            <Task
                key={columnCard.id}
                columnCard={columnCard}
                createdDate={columnCard.createdDate}
            />
            
        ))}
    </ul>
    
    
  )
}

export default CardsList