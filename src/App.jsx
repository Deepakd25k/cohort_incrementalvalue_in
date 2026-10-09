import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FitSection from './components/FitSection'
import CurriculumSection from './components/CurriculumSection'
import TakeawaysSection from './components/TakeawaysSection'
import InstructorSection from './components/InstructorSection'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'
import EnrolmentDialog from './components/EnrolmentDialog'
import StickyEnrolmentBar from './components/StickyEnrolmentBar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans" id="home">
      <Navbar />
      <Hero />
      <FitSection />
      <CurriculumSection />
      <TakeawaysSection />
      <InstructorSection />
      <JoinSection />
      <Footer />
      
      <EnrolmentDialog />
      <StickyEnrolmentBar />
    </div>
  )
}
