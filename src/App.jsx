
import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import customData from '../data/db.json'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { compareAsc, format, setDefaultOptions } from "date-fns"
import { sv } from "date-fns/locale"
setDefaultOptions({ locale: sv})


function App() {
  
  const [columns, setColumns] = useState([])
  const [newTask, setNewTask] = useState('')
  const [addedDate, setAddedDate] = useState(format(new Date(), "yyyy-MM-dd"))
  const [dueDate, setDueDate] = useState('')
  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true)

  const handleSubmitNewTak = () => {
    const id = columns[0].length ? columns[0][columns[0] - 1].id + 1 : 0
    const newTask = { id, done: false, createdDate, dueDate, title, description }
    const taskList = { ...columns[0], newTask}
    setColumns(taskList)
  }

  const handleCloseModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  };

  const handleShowModal = () => {
    setShowModal(true)
  }
  
  // localStorage.setItem('columnsList', JSON.stringify(customData))
  
  useEffect(() => {

    localStorage.setItem('columnsList', JSON.stringify(customData))

    const fetchColumns = () => {
      try {
        
        setColumns(JSON.parse(localStorage.getItem('columnsList')))
        
      } catch (err) {
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
    } 
    setTimeout(() => {
      (() => fetchColumns())()
    }, 2000)
  }, [])


  return (
    <>
      <Header title="The Board App"/>
      
      <main>
        {isLoading && <p style={{padding:'2rem'}}>Hämtar fram uppgifter ... </p>}
        {!isLoading && 
          <Content 
            columns={columns}
            addedDate={addedDate}
            setAddedDate={setAddedDate}
            handleSubmitNewTak={handleSubmitNewTak}
            hadleCloseModal={handleCloseModal}
            showModal={showModal}
            setShowModal={setShowModal}
            handleShowModal={handleShowModal}
            DatePicker={DatePicker}
          />
        }
        
      </main>
      <Footer />
    </>
  )
}

export default App
