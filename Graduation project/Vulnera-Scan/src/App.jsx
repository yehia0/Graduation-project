
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {


  return (
    <div>
      <NavBar/>
    <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
