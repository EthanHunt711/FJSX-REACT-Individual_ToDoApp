import { useContext } from 'react'
import DataContext from '../../../Context/DataContext'
import styles from './cardsList.module.css'
import Task from './TaskCard'


export const CardsList = () => {

  const { tasks } = useContext(DataContext)

  return (
    <ul className={styles.cardsList}>
        {tasks.map((task) => (
            <Task
                key={task.id}
                task={task}
            />
        ))}
    </ul>
    
    
  )
}

export default CardsList