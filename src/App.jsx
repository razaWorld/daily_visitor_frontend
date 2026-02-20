import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CustomButton } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
  
       <CustomButton title={`Count: ${count}`} onClick={() => setCount((count) => count + 1)} />
  
    </>
  )
}

export default App
