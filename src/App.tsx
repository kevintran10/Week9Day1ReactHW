import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import HomePage from './HomePage'
import SignUp from './SignUp'

function App() {
  
  return (
    <>
      <Navbar />
      <HomePage />
      <SignUp />
    </>
  )
}

export default App
