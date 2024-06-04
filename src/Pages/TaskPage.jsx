import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import styles from "./taskPage.module.css";
import { FcHome } from "react-icons/fc";

const TaskPage = () => {
  const { tasks, setTasks } = useContext(DataContext);
  const { ID } = useParams();
  const [post, setPost] = useState(tasks.find((el) => el.id == parseInt(ID)));
  const [editedTask, setEditedTask] = useState(post);

  useEffect(() => {
    setEditedTask(post);
  }, [post]);

  const handleEditTask = (e) => {
    const { dataset, innerText } = e.target;
    const { name } = dataset;
    setEditedTask((prev) => ({ ...prev, [name]: innerText }));
  };

  const handleSaveTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    //history.pushState("/")
    console.log(tasks);
  };

  const handleCancel = () => {
    setEditedTask(post);
  };

  const handleChangeStatus = () => {
    setEditedTask((prev) => ({
      ...prev,
      done: !prev.done,
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
          <div
            data-name="description"
            className={styles.contentContainer}
            contentEditable
            onInput={handleEditTask}
          >
            {editedTask.description}
          </div>
        </div>
        <div className={styles.editButtons}>
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
          <button
            type="button"
            aria-label="Ändra läge"
            onClick={handleChangeStatus}
          >
            {editedTask.done ? "Märkera som Doing" : "Märkera som Done"}
          </button>
          <Link to={"/"}>
            <button>
              <FcHome className={styles.homeButton} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
