import styles from './content.module.css'
import CardsList from './Tasks/CardsList'
import ColumnsList from './Columns/ColumnsList'
import AddNewTaskModal from '../Modals/AddNewTaskModal'

const Content = (

  


  { columns, addedDate, handleAddCard, handleCloseModal, showModal, setShowModal, handleShowModal }
  ) => {
  return (
    <>
    {showModal && <AddNewTaskModal 
            handleCloseModal={handleCloseModal}
            setShowModal={setShowModal}

    />}
    {columns.length ? (    
          <ColumnsList 
            columns={columns}
            addedDate={addedDate}
            handleAddCard={handleAddCard}
            handleShowModal={handleShowModal}
          />    
      ) : (
          <p style={{marginTop: '2rem'}}>Finns inga planeringar</p>
      )}
        
    </>
  )
}

export default Content