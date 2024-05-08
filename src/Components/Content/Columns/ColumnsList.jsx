import Column from './Column'
import styles from './columnsList.module.css'

const ColumnsList = ({ columns, addedDate}) => {
  return (
    <ul className={styles.columnsList}>
        {columns.map((column) => (
            <Column
                key={column.id}
                column={column}
                addedDate={addedDate}
            />
            
        ))}
    </ul>
  )
}

export default ColumnsList