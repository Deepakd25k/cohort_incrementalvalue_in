import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FitSection from './components/FitSection'
import CurriculumSection from './components/CurriculumSection'
import TakeawaysSection from './components/TakeawaysSection'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <FitSection />
      <CurriculumSection />
      <TakeawaysSection />
    </div>
  )
}
