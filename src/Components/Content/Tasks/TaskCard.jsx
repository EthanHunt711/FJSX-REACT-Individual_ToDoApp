import { useContext } from "react";
import DataContext from "../../../Context/DataContext";
import styles from "./taskCard.module.css";
import TaskPage from "../../../Pages/TaskPage";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const TaskCard = ({ task, column }) => {
  const { activeCard, setActiveCard, handleDeleteTask } =
    useContext(DataContext);

  return (
    <article
      className={styles.cardContainer}
      draggable="true"
      onDragStart={() => setActiveCard(task.id)}
      onDragEnd={() => setActiveCard(null)}
    >
      <Link to={`${column}/tasks/${task.id}`}>
        <h4 className={styles.title}>{task.title}</h4>
      </Link>
      <section>
        <view className={styles.detailSection}>
          <div className={styles.descriptionDate}>
            <p>{task.description.substring(0, 20)}</p>
            <p>Skapade: {task.createdDate}</p>
          </div>
          <MdDeleteForever
            className={styles.deleteButton}
            onClick={() => handleDeleteTask(task.id)}
          />
        </view>
      </section>
    </article>
  );
};

export default TaskCard;
