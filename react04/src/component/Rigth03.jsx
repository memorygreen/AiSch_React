import React, { useContext } from 'react'
import { AppContesxt } from '../App';

// 240813(5)

const Rigth03 = () => {
  // 고유공간에 접근해서 state을 비꾸고 싶어요
  const data = useContext(AppContesxt);

  function chNum(){
    data.setState(data.state+1)

  }

  return (
    <div>
        <h1>Rigth03</h1>
        <button onClick={chNum}>+1</button>
    </div>
  )
}

export default Rigth03