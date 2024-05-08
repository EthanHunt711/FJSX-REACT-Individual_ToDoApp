import styles from './content.module.css'
import CardsList from './Tasks/CardsList'
import ColumnsList from './Columns/ColumnsList'

const Content = (
  { columns, addedDate }
  ) => {
  return (
    <>
    {columns.length ? (    
          <ColumnsList 
            columns={columns}
            addedDate={addedDate}
          />    
          // <CardsList 
          //     columns={columns}
          //     addedDate={addedDate}
          // />
      ) : (
          <p style={{marginTop: '2rem'}}>Finns inga planeringar</p>
      )}
        
    </>
  )
}

export default Content