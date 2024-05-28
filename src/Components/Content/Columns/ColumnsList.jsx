import { useContext } from 'react'
import Column from './Column'
import styles from './columnsList.module.css'
import DataContext from '../../../Context/DataContext'

const ColumnsList = () => {

  const { columns } = useContext(DataContext)

  return (
    <ul className={styles.columnsList}>
        {columns.map((column) => (
            <Column
                key={columns.indexOf(column)}
                column={column}
            />
        ))}
    </ul>
  )
}

export default ColumnsList