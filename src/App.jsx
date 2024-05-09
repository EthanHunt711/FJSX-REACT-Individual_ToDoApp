
import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import customData from '../data/db.json'


const date = `${new Date().getFullYear()}-${(new Date().getMonth()+1 < 10 ? `0${new Date().getMonth()+1}` : `${new Date().getMonth()+1}`)}-${(new Date().getDate() < 10 ? `0${new Date().getDate()}` : `${new Date().getDate()}`)}`

function App() {

  const API_URL = 'http://localhost:3000/columns'
  
  const [addedDate, setAddedDate] = useState(date)

  const [columns, setColumns] = useState([])


  const [isLoading, setIsLoading] = useState(true)

  const handleAddedDate = () => {
    setAddedDate = date
  }

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


  localStorage.setItem('columnsList', JSON.stringify(customData))
  
  
  return (
    <>
      <Header title="The Board App"/>
      <main>
        <Content 
          columns={columns}
          addedDate={addedDate}
          setAddedDate={setAddedDate}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
