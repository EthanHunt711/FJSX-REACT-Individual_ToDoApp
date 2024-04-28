import CardsList from './Tasks/CardsList'
import styles from './columnsList.module.css'

const ColumnsList = ({ columns, addedDate}) => {
  return (
    <ul className={styles.columnsList}>
        {columns.map((column) => (
            <CardsList
                key={column.key}
                column={column}
                addedDate={addedDate}
            />
        ))}
    </ul>
  )
}

export default ColumnsList