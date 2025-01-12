import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
// import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the data!', error);
      })
  }, []);

  return (
    <>
      <h1>{message}</h1>

    </>
  )
}

export default App
