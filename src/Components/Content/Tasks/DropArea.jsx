import DataContext from "../../../Context/DataContext";
import styles from "./dropArea.module.css";
import { useState, useContext } from "react";

const DropArea = ({ position, column }) => {
  const [showDrop, setShowDrop] = useState(false);
  const { handleDrop } = useContext(DataContext);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={showDrop ? styles.dropArea : styles.hideDrop}
      onDrop={() => {
        handleDrop(column, position);
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Droppa här
    </section>
  );
};

export default DropArea;
