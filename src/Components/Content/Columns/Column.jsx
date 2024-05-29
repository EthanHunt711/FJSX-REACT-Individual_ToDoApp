import { useContext } from 'react'
import DataContext from '../../../Context/DataContext'
import styles from './column.module.css'
import CardsList from '../Tasks/CardsList'
import AddNewTask from '../Tasks/AddNewTask'
import AddNewTaskModal from '../../Modals/AddNewTaskModal'

const Column = ( { column }) => {

  const { modal } = useContext(DataContext)
  
  return (
    <section className={styles.column}>
        <div className={styles.title}>
            <h3>{column}</h3>
        </div>
        <div className={styles.cardsContainer}>
            <CardsList 
              // key={column}
            />
            {column === "To Do" &&
              <div className={styles.addBtn}>
                <AddNewTask
                  // handleAddCard={handleAddCard}
                  // handleShowModal={handleShowModal}
                />
                {!modal && <AddNewTaskModal />}
              </div>
              
            }
        </div>
       
    </section>
  )
}

export default Column