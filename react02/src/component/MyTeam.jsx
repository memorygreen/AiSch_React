import React from 'react'
 
// 240806(2) 쌤풀이
const MyTeam = (props) => {
    // JSX에서 inline style을 적용할 때는
    // --> 객체 형식으로 적용해야 한다
    let myStyle={border:"1px solid", textAlign:"center"}
  return (
    <div style={myStyle}>
    {/* <div style={{border:"1px solid", textAlign:"center"}}> */}
        <p>{props.departmentName}</p>
        <p>{props.name}</p>
    </div>
  )
}

// 240806(2)
// defaultProps : 데이터를 전달받지 않을 때 기본적으로 적용되는 데이터
MyTeam.defaultProps = {
    name : "직원 선별중"
}

export default MyTeam