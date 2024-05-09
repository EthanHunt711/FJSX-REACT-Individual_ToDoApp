import styles from './content.module.css'
import CardsList from './Tasks/CardsList'
import ColumnsList from './Columns/ColumnsList'

const Content = (
  { columns, addedDate, handleAddCard }
  ) => {
  return (
    <>
    {columns.length ? (    
          <ColumnsList 
            columns={columns}
            addedDate={addedDate}
            handleAddCard={handleAddCard}
          />    
      ) : (
          <p style={{marginTop: '2rem'}}>Finns inga planeringar</p>
      )}
        
    </>
  )
}

export default Content