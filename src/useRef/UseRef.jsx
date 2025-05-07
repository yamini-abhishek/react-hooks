import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [inputValue,setInputValue]=useState("");
    const count=useRef(0);
    // const count={current:0}

    useEffect(()=>{
        count.current=count.current+1;
    });
  return (
    <div>
      <input type="text" name="" id="" value={inputValue} onChange={(event)=>{
        setInputValue(event.target.value);
      }}/>

      <h2>Render count: {count.current}</h2>
    </div>
  )
}

export default UseRef
