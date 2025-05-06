import React, { useEffect, useState } from "react";

const Calculation = () => {
  const [count, setCount] = useState(0);
  const [Calculation, setCalculation] = useState(0);
  console.log(Calculation);

  useEffect(()=>{
      setCalculation(()=>count*2)
  },[count])

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => 
      {setCount(count + 1)}
    
    }>Count</button>
      <button>Calculation:{Calculation}</button>
    </div>
  );
};

export default Calculation;
