import React from 'react'
// 240813(5)
// 공유공간에 접근할 수 있는 기능
import { useContext } from 'react'
import { AppContesxt } from '../App';

const Left03 = () => {
  
  // data : 공유 되고 있는 값 
  // data={
  //   state : Number,
  //   setState : setNum
  // }
  const data = useContext(AppContesxt);

  return (
    <div>
        <h1>Left03</h1>
        <h1>{data. state}</h1>
    </div>
  )
}

export default Left03