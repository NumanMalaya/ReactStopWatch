import { useState } from 'react'
import Header from './components/Header'
import StopWatch from './components/StopWatch'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <StopWatch />
      <Footer />
    </div>
  )
}

 
