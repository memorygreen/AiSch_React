import React, { useContext } from 'react'
import { ColorContext } from '../App';

// 240814(1) 쌤풀이
const MyColor = () => {

    const shareData = useContext(ColorContext);

    // shareData = {
    //     state:color,
    //     setState: setColor
    // }

    const colorList = ['red', 'orange', 'yellow', 'green', 'blue']


    // for (let i=0; i<colorList.length;i++){
    //     colorList[i];
    // }


    // 240814 (2)
    // 화살표 함수 설명
    // const test2 = 30;
    // const testFun  = () => {}
    // 1. 실행 로직이 한 줄이라면 {} 생략 가능
    // 2. {} 생략한 경우 함수 실행 로직으로 data가 있다면 해당 data를 반환(return) 하겠ㅅ븐디ㅏ


    let myStyle = {
        width : '100px',
        height : '100px',
        display : 'inline-block',
    }
  return (
    <div>
        {colorList.map((data)=>
            <div 
            onClick={()=>shareData.setState(data)}
            style={{...myStyle, backgroundColor:data}}>

            </div>)}
    </div>
  )
}

export default MyColor