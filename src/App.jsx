import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './CommonComponent/NavBar/Navbar'
import HomeScreen from './Pages/HomeScreen/HomeScreen'
import Footer from './CommonComponent/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <HomeScreen/>
      <Footer/>
    </div>
  )
}

export default App
