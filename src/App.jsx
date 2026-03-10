import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomButton } from './components'
import { LandingScreen } from './auth/landing/LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    
       <CustomButton title={`Count: ${count}`} onClick={() => setCount((count) => count + 1)} />
      <LandingScreen/>
    </>
  )
}

export default App
