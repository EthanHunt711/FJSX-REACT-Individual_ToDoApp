import styles from './column.module.css'
import CardsList from '../Tasks/CardsList'

const Column = ({ column, addedDate }) => {
  return (
    <section className={styles.column}>
        <div className={styles.title}>
            <h3>{column.name}</h3>
        </div>
        <div className={styles.cardsContainer}>
            <CardsList 
                columnCards={column.cards}
                addedDate={addedDate}
            />
        </div>
    </section>
  )
}

export default Column