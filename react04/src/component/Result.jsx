import React, { useContext } from 'react'
import { ColorContext } from '../App';
// 240814(1) 쌤풀이
const Result = () => {
    const data = useContext(ColorContext);


    let myStyle = {
        width : '100px',
        height : '100px',
        display : 'inline-block',
        // backgroundColor : 'black'
    }

  return (
    <div style={{...myStyle, backgroundColor:data.state}}></div>
  )
}

export default Result