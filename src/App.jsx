import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {JsTask9} from './Tasks/JS/JsTask9.jsx'
import {FrontendTask} from "./Tasks/Frontend/FrontendTask.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <JsTask9/>
        <FrontendTask/>
    </>
  )
}

export default App
