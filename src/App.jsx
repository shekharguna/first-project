import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar1 from './comp/Navbar1'
import Carousel1 from './comp/Carousel'
import Card1 from './comp/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar1></Navbar1>
   <Carousel1></Carousel1>
   <Card1></Card1>
   </>
  )
}

export default App
