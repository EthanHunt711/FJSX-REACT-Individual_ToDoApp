import { IoMdAddCircle } from "react-icons/io";
import styles from './addNewTask.module.css'


const AddNewTask = ({ handleAddCard }) => {
  return (
    <button className={styles.addBtn} onClick={handleAddCard}>
        <p className={styles.addBtnText}>Skapa ny uppgift</p>
        <IoMdAddCircle 
            className={styles.addBtnIcon}
        />

    </button>
  )
}

export default AddNewTask