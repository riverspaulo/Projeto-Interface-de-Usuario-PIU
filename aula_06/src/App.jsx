import { useState } from 'react'
import './App.css'
import ListasFilter from './componentes/ListasFilter'
import ListasMap from './componentes/ListasMap'
import ListasObj from './componentes/ListasObj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListasFilter/>
      {/* <ListasMap/>
      <ListasObj/> */}
    </>
  )
}

export default App
