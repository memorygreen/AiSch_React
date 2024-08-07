import React from 'react'
import { useState } from 'react'; 

// 240807(1)
const MyState03 = () => {
  
  const [num, setNum] = useState(0)
  
  function plus(){
    setNum(num+1)
  }
  function minus(){
    if( num > 0){
      setNum(num-1)

    }
  }
  function reset(){
    setNum(0)
  }
  return (
    <div>
      <p>Like!♥ {num}</p>
      
      <button onClick={plus}>+1증가</button>
      <button onClick={minus}>-1감소</button>
      <button onClick={reset}>초기화</button>


    </div>
  )
}

export default MyState03