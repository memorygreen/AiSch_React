import React from 'react'


let p_style = {textAlign:'center'}
let div_style = {border:'1px solid gray'}
// 240806(2) 자영 실습
const MyTeamJy = (props) => {
  return (
    <div style={div_style}>
        <p style={p_style}>{props.team}</p>
        <p style={p_style}>{props.name}</p>

        
    </div>
  )
}

export default MyTeamJy