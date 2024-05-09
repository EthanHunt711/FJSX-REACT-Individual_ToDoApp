import { useState } from 'react'
import styles from './addNewTaskModal.module.css'



const AddNewTaskModal = ({ handleCloseModal, setShowModal }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const canSave = Boolean(newTaskTitle)

  return (
    <div className={styles.modalContainer}>
        <div className={styles.addNewTaskModal}>
            <form className={styles.addNewTaskModalMain}>
                <label htmlFor="newTaskTitle">Titel: </label>
                <input 
                    type="text" 
                    id='newTaskTitle'
                    name='newTaskTitle'
                />
                <p>Uppgift beskrivning: </p>
                <textarea
                    type="text" 
                    id='newTaskDescription'
                    name='newTaskDescription'
                />
                <div className={styles.addNewTaskButtonContainer}>
                    <button
                        //onClick={handleSaveUser}
                        className={styles.addnewTaskModalButton}
                        disabled={!canSave}
                    >Spara</button>
                    <button
                        onClick={handleCloseModal}
                        className={styles.addnewTaskModalButton}
                    >Avbryt</button>
                </div>

            </form>

        </div>
    </div>
  )
}

export default AddNewTaskModal