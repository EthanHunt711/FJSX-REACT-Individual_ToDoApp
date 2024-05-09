
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


// const date = `${new Date().getFullYear()}-${(new Date().getMonth()+1 < 10 ? `0${new Date().getMonth()+1}` : `${new Date().getMonth()+1}`)}-${(new Date().getDate() < 10 ? `0${new Date().getDate()}` : `${new Date().getDate()}`)}`

function App() {

  const API_URL = 'http://localhost:3000/columns'
  
  const [addedDate, setAddedDate] = useState(format(new Date(), "dd/MM/yyy"))
  const [dueDate, setDueDate] = useState('')
  const [showModal, setShowModal] = useState(false);

  const [columns, setColumns] = useState([])


  const [isLoading, setIsLoading] = useState(true)

  const handleAddCard = () => {
    console.log('test')
  }

  const handleCloseModal = () => {
    setShowModal(false)
  };

  const handleShowModal = () => {
    setShowModal(true)
  }
  
  localStorage.setItem('columnsList', JSON.stringify(customData))
  
  useEffect(() => {
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
            handleAddCard={handleAddCard}
            hadleCloseModal={handleCloseModal}
            showModal={showModal}
            setShowModal={setShowModal}
            handleShowModal={handleShowModal}
          />
        }
        
      </main>
      <Footer />
    </>
  )
}

export default App
