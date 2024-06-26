import { useState, useContext, useRef, useEffect } from "react";
import DataContext from "../../Context/DataContext";
import styles from "./addNewTaskModal.module.css";
import { format } from "date-fns";
import Tags from "../Content/Tasks/Tags";
import Calendar from "../Content/Calendar";

const AddNewTaskModal = () => {
  const { handleToggleModal, tasks, setTasks, dueDate, setDueDate } =
    useContext(DataContext);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [addedDate, setAddedDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("To Do");

  useEffect(() => {
    if (dueDate) {
      setDueDate(format(dueDate, "yyyy-MM-dd"));
    }
  }, [dueDate]);

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
    handleToggleModal();
  };

  return (
    <div className={styles.modalContainer}>
      <dialog className={styles.addNewTaskModal}>
        <p>Ny Uppgift</p>
        <form
          className={styles.addNewTaskModalMain}
          onSubmit={handleSubmitNewTask}
        >
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
              className={styles.newTaskDescriptionTextArea}
              placeholder="Beskrivning ..."
              type="text"
              id="newTaskDescription"
              name="newTaskDescription"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
          </div>
          <div className={styles.calendarDeadlineTaskModal}>
            <Calendar selectedDate={dueDate} setSelectedDate={setDueDate} />
          </div>
          <div className={styles.newTaskCategoryButtons}>
            <Tags setNewTaskCategory={setNewTaskCategory} />
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
      </dialog>
    </div>
  );
};

export default AddNewTaskModal;
