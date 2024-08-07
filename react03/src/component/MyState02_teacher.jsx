import React from 'react'
import { useState } from 'react'; // 자:state변수 만드는 기능

// 240806(4)
const MyState02 = () => {
    // 1. 버튼 클릭 시 어떤 버튼을 클릭했는지 숫자를 출력해주세요!
    // 2. 버튼 클릭 시 1~3 랜덤 수 생성 -> 랜덤 숫자 부분에 출력

    const [inputNum, setInputNum] = useState();
    // let inputNum = 0;

    const [ranNum, setRanNum] = useState(0)
    // let ranNum = 0;
  
    function click1 () {
      // inputNum = 1;
      setInputNum(1);

      // 1~3 사이의 랜덤수 생성
      // Math.random()*3 // 0~2.99999999
      // ranNum = parseInt(Math.random()*3)+1  // 1,2,3
      setRanNum(parseInt(Math.random()*3)+1)  // 1,2,3


    }

    function click2 () {
      setInputNum(2);
      setRanNum(parseInt(Math.random()*3)+1)  // 1,2,3
    }

    function click2 () {
      setInputNum(2);
      setRanNum(parseInt(Math.random()*3)+1)  // 1,2,3

    }

    function click3 () {
      setInputNum(3);
      setRanNum(parseInt(Math.random()*3)+1)  // 1,2,3

    }


  return (
    <div>
        <div>
            <button onClick={click1}>1</button>
            <button onClick={click2}>2</button>
            <button onClick={click3}>3</button>
        </div>

        <div>
            내가 입력한 숫자 : {inputNum}
            <br />
            랜덤한 숫자 : { ranNum }
            <br />
        </div>
    </div>
  )
}

export default MyState02;