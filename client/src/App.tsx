import { useState } from 'react'
import './App.css'

const apiEndpoint = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com/todos/1"
function App() {
  const [data, setData] = useState()

  const getApi=async()=>{
   const res = await fetch(apiEndpoint)
   const data = await res.json()
    setData(data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={getApi}>
          Call
        </button>
        <p>
          {JSON.stringify(data)}
        </p>


      </div>
    </>
  )
}

export default App
