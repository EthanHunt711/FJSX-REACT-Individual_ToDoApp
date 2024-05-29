import React, { Children } from "react";
import { createContext, useEffect, useState } from "react";


const DataContext = createContext({});



export const DataProvider = ({ children }) => {

    //a list for all the columns and possiblity for adding columns
    const columnsList = ["To Do", "Doing", "Done"]
    // useState for setting the initial columns
    const [columns, setColumns] = useState(columnsList || [])
    // retrieve all tasks if any or empty array
    const [tasks, setTasks] = useState(localStorage.getItem("allTasks") || [])
    // show modal
    const [modal, setModal] = useState(false)

    //delete a task by id
    const handleDeleteTask = (id) => {
        const newTasksList = tasks.filter((task) => task.id != id)
        setTasks(newTasksList)
      }
    
    const handleToggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        localStorage.setItem("allTasks", JSON.stringify(tasks))
        }, [tasks])
    
    return (
        <DataContext.Provider value={{ tasks, setTasks, columns, handleDeleteTask, handleToggleModal, modal }}>
            {children}
        </DataContext.Provider>
    )

}


export default DataContext;