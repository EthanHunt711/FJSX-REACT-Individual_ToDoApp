import styles from './cardsList.module.css'
import Task from './TaskCard'

export const CardsList = ( 
    { column, addedDate }
    ) => {

      console.log(column)
  return (
    
    <article className={styles.column}>
      <div className={styles.columnTitle}>
        <p className={styles.columnTitleText}>{column.key}</p>
      </div>
      <ul className={styles.list}>
        
          <Task 
              addedDate = { addedDate }
              
          /> 
      </ul>
    </article>
  )
}

export default CardsList