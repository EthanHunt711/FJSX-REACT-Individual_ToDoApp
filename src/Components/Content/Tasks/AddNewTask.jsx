import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styles from './addNewTask.module.css'
import DataContext from "../../../Context/DataContext";


const AddNewTask = () => {
  const { handleToggleModal } = useContext(DataContext)

  return (
    <button className={styles.addBtn} onClick={handleToggleModal}>
        <p className={styles.addBtnText}>Skapa ny uppgift</p>
        <IoMdAddCircle 
            className={styles.addBtnIcon}
        />

    </button>
  )
}

export default AddNewTask