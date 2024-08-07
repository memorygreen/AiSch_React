import React from 'react'
import { useState } from 'react';

// 240806(3) 

// React Hook : 함수형 컴포넌트에서 사용되어지는 기능
// useState : state 변수를 생성할 수 있는 기능


// 리액트에서는 일반 변수와 화면에 출력할 변수(state변수)를 구분

const MyState01 = () => {

    // useState를 이용해서 state변수를 생성 구조
    // num : state 변수
    // setNum : state변수를 바꿀 수 있는 함수

    const [num, setNum ] = useState(0);
    // let num = 0;

    function plus () {
      // num ++; // num = num + 1
      setNum(num+1);

      // num의 값을 바꿔서 다시 출력할꺼다 --> 재렌더링
      // ---> 해당 컴포넌트를 다시 실행 시킬꺼다
      
      // setNum(num++);
      console.log(num);

      // setState의 특징 : 클로저 함수다(제일 마지막에 실행된다!!)
      //// setNum(num+1)
      // if(num==10){
      //   alert("목표 숫자 도달")
      // }
    }
    
    function minus (){
      // num --;
      setNum(num-1);
      console.log(num);
    }

    return (
    <div>
        <h1>{num}</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>

    </div>
  )
}

export default MyState01;