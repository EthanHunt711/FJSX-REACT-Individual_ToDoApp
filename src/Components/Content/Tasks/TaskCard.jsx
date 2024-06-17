import { useContext } from "react";
import DataContext from "../../../Context/DataContext";
import styles from "./taskCard.module.css";
import TaskPage from "../../../Pages/TaskPage";
import TaskCardStatus from "./TaskCardStatus";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const TaskCard = ({ task, column }) => {
  const { setActiveCard, handleDeleteTask } = useContext(DataContext);

  return (
    <article
      className={styles.cardContainer}
      draggable="true"
      onDragStart={() => setActiveCard(task.id)}
      onDragEnd={() => setActiveCard(null)}
    >
      <Link to={`/columns/${column}/tasks/${task.id}`}>
        <h4 className={styles.title}>{task.title}</h4>
      </Link>
      <section className={styles.detailsSectionUpp}>
        <div className={styles.detailSection}>
          <p>{task.description.substring(0, 50)}</p>
          <div className={styles.descriptionDateAndDelete}>
            <div className={styles.descriptionDate}>
              <p>skapade: {task.createdDate}</p>
              <TaskCardStatus taskStatus={task.category} />
            </div>
            <MdDeleteForever
              className={styles.deleteButton}
              onClick={() => handleDeleteTask(task.id)}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default TaskCard;
