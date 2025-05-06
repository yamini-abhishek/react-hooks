
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Calculation from './Calculation';

function App() {
const [count,setCount]=useState(0);

useEffect(()=>{
  setTimeout(()=>{
    setCount(count+1)
  },1000)
},[])


  return (
    <>
     <p>Number of render is {count} time</p>
     <Calculation/>
    </>
  )
}

export default App
