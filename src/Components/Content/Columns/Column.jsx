import styles from './column.module.css'
import CardsList from '../Tasks/CardsList'
import AddNewTask from '../Tasks/AddNewTask'

const Column = ( { column }) => {
  return (
    <section className={styles.column}>
        <div className={styles.title}>
            <h3>{column}</h3>
        </div>
        <div className={styles.cardsContainer}>
            {/* <CardsList 
              
            /> */}
            {column === "To Do" &&
              <div className={styles.addBtn}>
                <AddNewTask
                  // handleAddCard={handleAddCard}
                  // handleShowModal={handleShowModal}
                />
              </div>
              
            }
        </div>
       
    </section>
  )
}

export default Column