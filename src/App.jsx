import React, { useState } from 'react'

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
  return (
    <div
      className={isLightModeOn ? 'container light-mode' : 'container dark-mode'}
    >
      <Header
        setIsLightModeOn={setIsLightModeOn}
        isLightModeOn={isLightModeOn}
      />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
