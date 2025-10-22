import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      console.log("Axios response:", response.data)
      setJokes(response.data)
      //console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
      alert("Error in Axios fetching")
    })
  }, [])
  return (
    <>
      <h1>Chai aur Fullstack Arghya</h1>
      <p>JOKES: {jokes.length}</p>
      
      {
        jokes.map((joke, index)=>(
          <div key = {joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
            
          </div>         
        ))
      }
    </>
  )
}

export default App
