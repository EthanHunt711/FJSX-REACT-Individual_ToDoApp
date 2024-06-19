import { useContext } from "react";
import Column from "./Column";
import styles from "./columnsList.module.css";
import DataContext from "../../../Context/DataContext";

const ColumnsList = () => {
  const { columns } = useContext(DataContext);

  return (
    <ul className={styles.columnsList}>
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </ul>
  );
};

export default ColumnsList;
