import { useState, useRef } from 'react'
import styles from './addNewTaskModal.module.css'
import Calendar from '../Calendar';





const AddNewTaskModal = ({ handleCloseModal, handleSubmitNewTak }) => {

    const inputRef = useRef()

    const [newTask, setNewTask] = useState('')
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [addedDate, setAddedDate] = useState(format(new Date(), "yyyy-MM-dd"))
    const [dueDate, setDueDate] = useState('')
    const [newTaskDesciption, setNewTaskDescription] = useState('')

    const canSave = Boolean(newTaskTitle)

   const task = {
    id: 1, 
    done: false, 
    createdDate: addedDate, 
    dueDate: dueDate, 
    title: newTaskTitle, 
    description: newTaskDesciption 
   }

  return (
    <div className={styles.modalContainer}>
        <div className={styles.addNewTaskModal}>
            <p>Ny Uppgift</p>
            <form className={styles.addNewTaskModalMain} onSubmit={handleSubmitNewTak(task)}>
                <div className={styles.newTaskTitle}>
                    <label htmlFor="newTaskTitle">Titel: </label>
                    <input 
                        autoFocus
                        type="text" 
                        id='newTaskTitle'
                        name='newTaskTitle'
                        placeholder='Titel'
                        ref={inputRef}
                        value={newTaskTitle}
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
                        autoFocus
                        placeholder='Beskrivning ... '
                        type="text" 
                        id='newTaskDescription'
                        name='newTaskDescription'
                        ref={inputRef}
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                    />
                </div>
                <div className={styles.addNewTaskButtonContainer}>
                    <button
                        onClick={() => inputRef.current.focus()}
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