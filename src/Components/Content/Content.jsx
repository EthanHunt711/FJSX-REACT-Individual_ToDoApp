import { useContext, useState } from "react";
import DataContext from "../../Context/DataContext";

import styles from "./content.module.css";
import CardsList from "./Tasks/CardsList";
import ColumnsList from "./Columns/ColumnsList";
import AddNewTaskModal from "../Modals/AddNewTaskModal";

const Content = () => {
  const { columns, tasks, activeCard } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {columns.length ? (
        <ColumnsList columns={columns} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Finns inga planeringar</p>
      )}
      <h1>Active card - {activeCard}</h1>
    </>
  );
};

export default Content;
