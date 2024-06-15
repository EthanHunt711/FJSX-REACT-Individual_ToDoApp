import DataContext from "../../../Context/DataContext";
import { useContext } from "react";
import styles from "./tags.module.css";

const Tags = ({ setNewTaskCategory }) => {
  const { columns } = useContext(DataContext); // Ensure the correct key is used here

  const colors = ["#dc3545", "#007bff", "#28a745"];
  const handlTaskCategory = (e, category) => {
    e.preventDefault();
    setNewTaskCategory(category);
  };
  return (
    <div className={styles.tagsList}>
      {columns.map((column, index) => (
        <button
          key={index}
          className={styles.tagBtn}
          style={{ backgroundColor: colors[index % colors.length] }}
          onClick={(e) => handlTaskCategory(e, column)}
        >
          {column}
        </button>
      ))}
    </div>
  );
};

export default Tags;
