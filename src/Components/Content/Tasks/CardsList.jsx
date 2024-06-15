import { useContext } from "react";
import DataContext from "../../../Context/DataContext";
import styles from "./cardsList.module.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const CardsList = ({ columnId, column }) => {
  const { tasks } = useContext(DataContext);

  return (
    <ul className={styles.cardsList}>
      {tasks && tasks.length > 0 ? (
        tasks
          .filter((task) => task.category === columnId)
          .map((task) => (
            <>
              <DropArea column={columnId} position={task.id - 1} />
              <TaskCard key={task.id} task={task} column={column} />
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
