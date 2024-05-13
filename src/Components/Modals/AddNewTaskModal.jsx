import { useState } from 'react'
import styles from './addNewTaskModal.module.css'
import Calendar from '../Calendar';





const AddNewTaskModal = ({ handleCloseModal, handleSubmitNewTak }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskDescription, setNewTaskDescription] = useState('')
    const [newTaskAddedDate, setNewTaskAddedDate] = useState(new Date())
    const [newTaskDueDate, setNewTaskDueDate] = useState(new Date())

    const canSave = Boolean(newTaskTitle)

  return (
    <div className={styles.modalContainer}>
        <div className={styles.addNewTaskModal}>
            <p>Ny Uppgift</p>
            <form className={styles.addNewTaskModalMain}>
                <div className={styles.newTaskTitle}>
                    <label htmlFor="newTaskTitle">Titel: </label>
                    <input 
                        type="text" 
                        id='newTaskTitle'
                        name='newTaskTitle'
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                </div>
                <div className={styles.chooseDate}>
                    
                    <Calendar 
                        
                    />
                    <Calendar 
                        
                    />
                    
                </div> 
                <div className={styles.newTaskDesciption}>
                    <p>Uppgift beskrivning: </p>
                    <textarea
                        type="text" 
                        id='newTaskDescription'
                        name='newTaskDescription'
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                </div>
                <div className={styles.addNewTaskButtonContainer}>
                    <button
                        onClick={handleSubmitNewTak}
                        type='submit'
                        aria-label='Lägg till uppgift'
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