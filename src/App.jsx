
import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'


const date = `${new Date().getFullYear()}-${(new Date().getMonth()+1 < 10 ? `0${new Date().getMonth()+1}` : `${new Date().getMonth()+1}`)}-${(new Date().getDate() < 10 ? `0${new Date().getDate()}` : `${new Date().getDate()}`)}`

function App() {

  const API_URL = 'http://localhost:3000/columns'
  
  const [addedDate, setAddedDate] = useState(date)

  const [columns, setColumns] = useState([])

  const [addToDoCard, setAddToDoCard] = useState([])

  const [addDoingCard, setAddDoingCard] = useState([])

  const [addDoneCard, setAddDoneCard] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchColumns = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not recieve expected data')
        const columnItems = await response.json()
        console.log(typeof(columnItems))
        console.log(columnItems.length)
        setColumns(columnItems)
        
      } catch (err) {
        console.log(err.message)
      } finally {
        setIsLoading(false)
      }
    } 
    setTimeout(() => {
      (async() => await fetchColumns())()
    }, 2000)
  }, [])

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
