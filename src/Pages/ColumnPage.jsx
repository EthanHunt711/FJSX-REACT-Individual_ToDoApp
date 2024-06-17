import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";
import styles from "./columnPage.module.css";
import TaskCard from "../Components/Content/Tasks/TaskCard";
import DropArea from "../Components/Content/Tasks/DropArea";

const ColumnPage = () => {
  const { tasks } = useContext(DataContext);
  const { NAME } = useParams();

  return (
    <>
      <div>
        <h2>{NAME}</h2>
      </div>
      <ul className={styles.cardsList}>
        {tasks && tasks.length > 0 ? (
          tasks
            .filter((task) => task.category === NAME)
            .map((task) => (
              <>
                <DropArea column={NAME} position={task.id - 1} />
                <TaskCard key={task.id} task={task} column={NAME} />
                <DropArea column={NAME} position={task.id + 1} />
              </>
            ))
        ) : (
          <p className={styles.noTasksMessage}>Inga uppgifter att visa</p>
        )}
      </ul>
    </>
  );
};

export default ColumnPage;
