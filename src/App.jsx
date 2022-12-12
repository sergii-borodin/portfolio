import React, { useState, useEffect } from 'react'

import {
  About,
  Projects,
  Footer,
  Header,
  Skills,
  Experience,
} from './components/index'

function App() {
  const [isLightModeOn, setIsLightModeOn] = useState(true)
  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', (e) =>
        setIsLightModeOn(e.matches ? true : false)
      )

    // Setup dark/light mode for the first time
    setIsLightModeOn(
      window.matchMedia('(prefers-color-scheme: light)').matches ? true : false
    )

    // Remove listener
    return () => {
      window
        .matchMedia('(prefers-color-scheme: light)')
        .removeEventListener('change', () => {})
    }
  }, [])
  return (
    <div className={isLightModeOn ? 'light-mode' : 'dark-mode'}>
      <Header
        setIsLightModeOn={setIsLightModeOn}
        isLightModeOn={isLightModeOn}
      />
      <About isLightModeOn={ isLightModeOn} />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
