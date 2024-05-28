import styles from './taskCard.module.css'

const Task = ( { columnCard, createdDate}) => {
  return (
    <form className={styles.cardContainer}>
      <h4 className={styles.title}>{columnCard.title}</h4>
      <div className={styles.date}>
        <p>{createdDate}</p>
      </div>
    </form>
  ) 
}

export default Task