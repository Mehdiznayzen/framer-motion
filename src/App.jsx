import React, { useState } from 'react'
import { BrowserRouter , Route, Router, Routes } from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'
import Step1 from './components/step1'
import './app.css'
import Step2 from './components/step2'
import Order from './components/order'

function App() {
  const [nameStep1, setNameStep1] = useState('')
  const [nameStep2, setNameStep2] = useState('')


  return (
    <BrowserRouter>
      <section className='h-screen text-white overflow-hidden font-serif'>
        <header className="header w-[100%] h-[15vh] flex items-center px-20">
          <Header/>
        </header>
        <div className="containers h-[80vh] flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/step1" element={<Step1 setNameStep1={setNameStep1} />} />
            <Route path="/step2" element={<Step2 setNameStep2={setNameStep2} />} />
            <Route path='/order' element={<Order nameStep1={nameStep1} nameStep2={nameStep2} />}/>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  )
}

export default App