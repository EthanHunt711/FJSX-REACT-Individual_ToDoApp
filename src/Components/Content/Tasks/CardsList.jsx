import { useContext } from "react";
import DataContext from "../../../Context/DataContext";
import styles from "./cardsList.module.css";
import TaskCardThumbnail from "./TaskCardThumbnail";
import DropArea from "./DropArea";

const CardsList = ({ columnId, column }) => {
  const { tasks } = useContext(DataContext);

  return (
    <ul className={styles.cardsList}>
      <DropArea column={columnId} position={0} />
      {tasks && tasks.length > 0 ? (
        tasks
          .filter((task) => task.category === columnId)
          .map((task) => (
            <>
              <DropArea column={columnId} position={task.id - 1} />
              <TaskCardThumbnail key={task.id} task={task} column={column} />
              <DropArea column={columnId} position={task.id + 1} />
            </>
          ))
      ) : (
        <p className={styles.noTasksMessage}>Inga uppgifter att visa</p>
      )}
    </ul>
  );
};

export default CardsList;
