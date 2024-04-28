import styles from './taskCard.module.css'

const Task = ( { addedDate, setAddedDate }) => {
  return (
    <section className={styles.task}>
        <p className={styles.title}>Task</p> 
        <span className={styles.date}>{addedDate}</span>

    
    </section>
  )
}

export default Task