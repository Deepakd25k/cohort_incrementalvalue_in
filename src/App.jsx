import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FitSection from './components/FitSection'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <FitSection />
    </div>
  )
}
