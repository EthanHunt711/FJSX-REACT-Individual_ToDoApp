import { useState, useContext, useRef } from 'react';
import DataContext from '../../Context/DataContext';
import styles from './addNewTaskModal.module.css';
import { format } from 'date-fns';

const AddNewTaskModal = () => {
  const { handleToggleModal, tasks, setTasks } = useContext(DataContext);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [addedDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [dueDate, setDueDate] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('To Do');

  const canSave = Boolean(newTaskTitle);
  const inputRef = useRef(null);

  const handleSubmitNewTask = (e) => {
    e.preventDefault();

    const task = {
      id: tasks.length ? tasks.length + 1 : 1,
      done: false,
      createdDate: addedDate,
      dueDate: dueDate,
      title: newTaskTitle,
      description: newTaskDescription,
      category: newTaskCategory,
    };

    setTasks((prev) => [...prev, task]);
    console.log(tasks)
    handleToggleModal();
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.addNewTaskModal}>
        <p>Ny Uppgift</p>
        <form className={styles.addNewTaskModalMain} onSubmit={handleSubmitNewTask}>
          <div className={styles.newTaskTitle}>
            <label htmlFor="newTaskTitle">Titel: </label>
            <input
              autoFocus
              type="text"
              id="newTaskTitle"
              name="newTaskTitle"
              placeholder="Titel"
              ref={inputRef}
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
          </div>
          <div className={styles.newTaskDescription}>
            <p>Uppgift beskrivning: </p>
            <textarea
              placeholder="Beskrivning ..."
              type="text"
              id="newTaskDescription"
              name="newTaskDescription"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
          </div>
          <div className={styles.addNewTaskButtonContainer}>
            <button
              type="submit"
              aria-label="Lägg till uppgift"
              className={styles.addnewTaskModalButton}
              disabled={!canSave}
            >
              Spara
            </button>
            <button
              onClick={handleToggleModal}
              className={styles.addnewTaskModalButton}
              type="button"
            >
              Avbryt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTaskModal;
