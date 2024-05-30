import { useContext } from 'react'
import DataContext from '../../../Context/DataContext'
import styles from './cardsList.module.css'
import TaskCard from './TaskCard'


const CardsList = ({ columnId }) => {
  const { tasks } = useContext(DataContext);

  return (
    <ul className={styles.cardsList}>
      {tasks && tasks.length > 0 ? (
        tasks
          .filter((task) => task.category === columnId)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
      ) : (
        <p className={styles.noTasksMessage}>Inga uppgifter att visa</p>
      )}
    </ul>
  );
}

export default CardsList;