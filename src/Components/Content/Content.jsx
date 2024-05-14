import styles from './content.module.css'
import CardsList from './Tasks/CardsList'
import ColumnsList from './Columns/ColumnsList'
import AddNewTaskModal from '../Modals/AddNewTaskModal'

const Content = (

  


  { columns, addedDate, setAddedDate, handleAddCard, handleCloseModal, showModal, setShowModal, handleShowModal, DatePicker, handleSubmitNewTak }
  ) => {
  return (
    <>
        {showModal && <AddNewTaskModal 
              handleCloseModal={handleCloseModal}
              setShowModal={setShowModal}
              DatePicker={DatePicker}
              addedDate={addedDate}
              setAddedDate={setAddedDate}
              handleSubmitNewTak={handleSubmitNewTak}

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