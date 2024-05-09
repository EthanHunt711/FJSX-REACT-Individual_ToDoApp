import styles from './column.module.css'
import CardsList from '../Tasks/CardsList'
import AddNewTask from '../Tasks/AddNewTask'

const Column = ({ column, addedDate, handleAddCard }) => {
  return (
    <section className={styles.column}>
        <div className={styles.title}>
            <h3>{column.name}</h3>
        </div>
        <div className={styles.cardsContainer}>
            <CardsList 
                columnCards={column.cards}
                addedDate={addedDate}
                columnId={column.id}
            />
            {column.id === 0 &&
              <div className={styles.addBtn}>
                <AddNewTask
                  handleAddCard={handleAddCard}
                />
              </div>
              
            }
        </div>
       
    </section>
  )
}

export default Column