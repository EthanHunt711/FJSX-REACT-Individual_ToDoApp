import { useState, useEffect, useReducer, act } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import CompleteColumn from './Components/Content/Columns/CompleteColumn'
import CompleteTask from './Components/Content/Tasks/CompleteTask'
import { DataProvider } from './Context/DataContext'
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className='toDoWebsite'>
      <Header title="The Board App"/>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/columns/:NAME" element={<CompleteColumn/>}/>
          <Route path="/tasks/:ID" element={<CompleteTask/>}/>
          {/* <Route path="*" element={<MissingPage/>}/> */}
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  )
}

export default App
