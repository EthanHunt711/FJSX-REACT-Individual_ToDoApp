import React from "react";
import styles from "./taskCardStatus.module.css";

const TaskCardStatus = ({ taskStatus }) => {
  return (
    <>
      <p>status: {taskStatus}</p>
    </>
  );
};

export default TaskCardStatus;
