import { IoMdAddCircle } from "react-icons/io";
import styles from './addNewTask.module.css'


const AddNewTask = ({ handleAddCard, handleShowModal }) => {
  return (
    <button className={styles.addBtn} onClick={handleShowModal}>
        <p className={styles.addBtnText}>Skapa ny uppgift</p>
        <IoMdAddCircle 
            className={styles.addBtnIcon}
        />

    </button>
  )
}

export default AddNewTask