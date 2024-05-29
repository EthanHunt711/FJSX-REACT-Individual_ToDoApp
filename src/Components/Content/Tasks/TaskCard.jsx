import { useContext } from 'react'
import DataContext from '../../../Context/DataContext'
import styles from './taskCard.module.css'

const Task = ( { task }) => {

  
  return (
    <form className={styles.cardContainer}>
      <h4 className={styles.title}>{task.title}</h4>
      <div className={styles.date}>
        <p>{task.createdDate}</p>
      </div>
    </form>
  ) 
}

export default Task