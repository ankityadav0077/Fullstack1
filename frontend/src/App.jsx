import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasktodo from './pages/Tasktodo'
import Features from './pages/Featuers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tasktodo/>   
    <Features/>
    </>
  )
}

export default App
