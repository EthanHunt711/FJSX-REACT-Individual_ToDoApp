import Column from './Column'
import styles from './columnsList.module.css'

const ColumnsList = ({ columns, addedDate, handleAddCard}) => {
  return (
    <ul className={styles.columnsList}>
        {columns.map((column) => (
            <Column
                key={column.id}
                column={column}
                addedDate={addedDate}
                handleAddCard={handleAddCard}
            />
            
        ))}
    </ul>
  )
}

export default ColumnsList