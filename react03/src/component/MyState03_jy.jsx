import React from 'react'
import { useState } from 'react'; 

const MyState03_jy = () => {
  
  const [num, setNum] = useState(0)
    
  return (
    <div>
      <p>Like!♥ {num}</p>
      
      <button onClick={()=>setNum(num+1)}>+1증가</button>
      <button onClick={()=>setNum(num-1)}>-1감소</button>
      <button onClick={()=>setNum(0)}>초기화</button>


    </div>
  )
}

export default MyState03_jy