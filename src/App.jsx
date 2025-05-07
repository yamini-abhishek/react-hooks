
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Calculation from './Calculation';
import UseRef from './useRef/UseRef';
import Todos from './axios/Todos';

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

     <p>UseRef examples</p>
     <UseRef />
     <h1>AXIOS EXAMPLE USING TODOS</h1>
     <Todos/>
    </>
  )
}

export default App
