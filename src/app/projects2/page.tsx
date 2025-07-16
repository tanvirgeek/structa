import ExcitedToStart from '@/components/ExcitedToStart'
import Footer from '@/components/Footer'
import Home2Navbar from '@/components/Home2Navbar'
import PageHero from '@/components/PageHero'
import Projects2Component from '@/components/Projects1Component'
import React from 'react'

const Projects2 = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-background shadow-md">
        <Home2Navbar />
      </div>

      {/* Page Content */}
      <main>
        <PageHero heading={`Transform vision\ninto reality`} text="explore our projects" />
        <Projects2Component/>
        <ExcitedToStart/>
      </main>
      <Footer/>
    </div>
  )
}

export default Projects2