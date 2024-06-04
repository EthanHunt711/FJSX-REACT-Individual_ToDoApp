import { useState, useEffect, useReducer, act } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import ColumnPage from "./Pages/ColumnPage";
import TaskPage from "./Pages/TaskPage";
import MissingPage from "./Pages/MissingPage";
import { DataProvider } from "./Context/DataContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="toDoWebsite">
      <Header title="The Board App" />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/columns/:NAME" element={<ColumnPage />} />
          <Route path=":NAME/tasks/:ID" element={<TaskPage />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
