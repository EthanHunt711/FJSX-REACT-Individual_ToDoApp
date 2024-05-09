import styles from './addNewTaskModal.module.css'



const AddNewTaskModal = () => {
  return (
    <div className={styles.addNewTaskModalContainer}>
        <div className={styles.addNewTaskModal}>
            <section className={styles.addNewTaskModalMain}>
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

            </section>

        </div>
    </div>
  )
}

export default AddNewTaskModal