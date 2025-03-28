import { useState } from 'react'
import './App.css'
import NavBar from './Components/Landing/NavBar'
import Carousel from './Components/Landing/Carousel'
import VaxCount from './Components/Landing/VaxCount'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-stone-200">
       <NavBar/>
      </div>
      <Carousel/>
     <VaxCount/>
    
    </>
  )
}

export default App
