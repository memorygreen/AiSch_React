import React from 'react'
import Right02 from './Right02'

const Rigth01 = (props) => {

    function chNum(){
        props.data(props.data2+1)
    }
  return (
    <div>
        <h1>Right</h1>
        {/* <button onClick={chNum}>+1</button> */}
        <Right02></Right02>
    </div>
  )
}

export default Rigth01