import React from 'react'
import Login from './pages/Login'
import './App.css';
import SignUp from './pages/Signup';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
const App = () => {
  return (
  <div className="bg-image flex justify-center items-center  md:w-screen md:min-h-screen">
    <Home />
  </div>
  )
}

export default App
