import React, { Children } from "react";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //a list for all the columns and possiblity for adding columns
  const columnsList = ["To Do", "Doing", "Done"];
  // useState for setting the initial columns
  const [columns, setColumns] = useState(columnsList || []);
  // retrieve all tasks if any or empty array
  const initialState = columns.map((column, index) => {
    const initialList = [];
    const columnCategory = {
      id: index,
      name: column,
      tasks: [],
    };
    initialList.push(columnCategory);
  });
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("allTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  // show modal
  const [modal, setModal] = useState(false);

  //Card dragging
  const [activeCard, setActiveCard] = useState(null);

  //delete a task by id
  const handleDeleteTask = (id) => {
    const newTasksList = tasks.filter((task) => task.id != id);
    setTasks(newTasksList);
  };

  const handleToggleModal = () => {
    setModal(!modal);
  };

  const handleDrop = (column, position) => {
    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks.find((task) => task.id === activeCard);
    if (!taskToMove) return;

    const updatedTasks = tasks.filter((task) => task.id !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      category: column,
    });

    setTasks(updatedTasks);
    setActiveCard(null);
  };

  useEffect(() => {
    //console.log(initialState);
    localStorage.setItem("allTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <DataContext.Provider
      value={{
        columnsList,
        tasks,
        setTasks,
        columns,
        handleDeleteTask,
        handleToggleModal,
        modal,
        activeCard,
        setActiveCard,
        handleDrop,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
