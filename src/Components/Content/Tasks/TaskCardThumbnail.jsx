import { useContext } from "react";
import DataContext from "../../../Context/DataContext";
import styles from "./taskCardThumbnail.module.css";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import TaskCardDueDate from "./TaskCardDueDate";

const TaskCardThumbnail = ({ task, column }) => {
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
          <div className={styles.descriptionDateAndDelete}>
            <div className={styles.descriptionDate}>
              <p>skapade: {task.createdDate}</p>

              <TaskCardDueDate
                createdDate={task.createdDate}
                dueDate={task.dueDate}
              />
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

export default TaskCardThumbnail;
