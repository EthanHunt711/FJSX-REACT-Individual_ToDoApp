import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import styles from "./taskPage.module.css";
import { MdDeleteForever } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import Calendar from "../Components/Content/Calendar";
import TaskCardDueDate from "../Components/Content/Tasks/TaskCardDueDate";

const TaskPage = () => {
  const { tasks, setTasks, handleDeleteTask, dueDate, setDueDate } =
    useContext(DataContext);
  const { ID } = useParams();
  const [post, setPost] = useState(tasks.find((el) => el.id == parseInt(ID)));
  const [editedTask, setEditedTask] = useState(post);
  const [selectedDate, setSelectedDate] = useState(
    post.dueDate ? new Date(post.dueDate) : null
  );

  useEffect(() => {
    setEditedTask(post);
  }, [post]);

  const handleEditTask = (e) => {
    const { dataset, innerText } = e.target;
    const { name } = dataset;
    setEditedTask((prev) => ({ ...prev, [name]: innerText }));
  };

  const handleSaveTask = () => {
    const updatedTask = {
      ...editedTask,
      dueDate: selectedDate ? selectedDate.toISOString().split("T")[0] : null,
    };
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleCancel = () => {
    setEditedTask(post);
    setSelectedDate(post.dueDate ? new Date(post.dueDate) : null);
  };

  const handleChangeStatusToDoing = () => {
    setEditedTask((prev) => ({
      ...prev,
      done: false,
      category: "Doing",
    }));
  };

  const handleChangeStatusToDone = () => {
    setEditedTask((prev) => ({
      ...prev,
      done: true,
      category: "Done",
    }));
  };
  const handleChangeStatusToToDo = () => {
    setEditedTask((prev) => ({
      ...prev,
      done: false,
      category: "To Do",
    }));
  };
  const canSave = Boolean(post);

  return (
    <>
      <div className={styles.taskContainer}>
        <div className={styles.editableContent}>
          <h2
            data-name="title"
            onInput={handleEditTask}
            contentEditable
            suppressContentEditableWarning={true}
          >
            {editedTask.title}
          </h2>
          <TaskCardDueDate
            createdDate={editedTask.createdDate}
            dueDate={editedTask.dueDate}
          />
          <div
            data-name="description"
            className={styles.contentContainer}
            contentEditable
            onInput={handleEditTask}
            suppressContentEditableWarning={true}
          >
            {editedTask.description}
          </div>
          <div data-name="createdDate" className={styles.contentContainerDate}>
            skapade: {editedTask.createdDate}
          </div>
          {!editedTask.dueDate ? (
            <Calendar selectedDate={dueDate} setSelectedDate={setDueDate} />
          ) : (
            <div
              data-name="dueDate"
              className={styles.contentContainerDate}
              // contentEditable
              // onInput={handleEditTask}
            >
              deadline: {editedTask.dueDate}
            </div>
          )}

          <div
            data-name="status"
            className={styles.contentContainerStatus}
            //contentEditable
            //onInput={handleEditTask}
          >
            status: {editedTask.category}
          </div>
        </div>
        <div className={styles.editButtons}>
          <Link to={"/"}>
            <button>
              <IoHome className={styles.homeButton} />
            </button>
          </Link>
          <button>
            <MdDeleteForever
              className={styles.homeButton}
              onClick={() => handleDeleteTask(editedTask.id)}
            />
          </button>

          {editedTask.category === "To Do" && (
            <button
              type="button"
              aria-label="Ändra läge"
              onClick={handleChangeStatusToDoing}
            >
              Märkera som Doing
            </button>
          )}
          {editedTask.category === "To Do" && (
            <button
              type="button"
              aria-label="Ändra läge"
              onClick={handleChangeStatusToDone}
            >
              Märkera som Done
            </button>
          )}
          {editedTask.category === "Doing" && (
            <button
              type="button"
              aria-label="Ändra läge"
              onClick={handleChangeStatusToToDo}
            >
              Märkera som To Do
            </button>
          )}
          {editedTask.category === "Doing" && (
            <button
              type="button"
              aria-label="Ändra läge"
              onClick={handleChangeStatusToDone}
            >
              Märkera som Done
            </button>
          )}
          {editedTask.category === "Done" && (
            <button
              type="button"
              aria-label="Ändra läge"
              onClick={handleChangeStatusToToDo}
            >
              Märkera som To Do
            </button>
          )}
          {editedTask.category === "Done" && (
            <button
              type="button"
              aria-label="Ändra läge"
              onClick={handleChangeStatusToDoing}
            >
              Märkera som Doing
            </button>
          )}
          <button
            type="button"
            aria-label="Spara ändringar"
            disabled={!canSave}
            onClick={handleSaveTask}
          >
            Spara
          </button>
          <button
            type="button"
            aria-label="Avbryt ändringar"
            onClick={handleCancel}
          >
            Avbryt
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
