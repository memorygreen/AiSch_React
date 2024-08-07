import React from 'react'
import { useState } from 'react'; // 자:state변수 만드는 기능

// 240806(4)
const MyState02_2_teacher = () => {
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
    
    // 240807 (1)
    // 1,2,3 버튼 기능
    function chNum(e){
      // e (이벤트 객체) : 이벤트 정보를 가지고 있다 
      // (어떤 이벤트가 발생했는지, 누가 발생시켰는지)
      // e.target : 이벤트를 발생시킨 태그
      //자 : e.target이 태그 자체를 가져옴 여기는 button //document.getElementById() 이런거랑 같음
      // document.getElementById().innerText

      setInputNum(e.target.innerText)
      setRanNum(parseInt(Math.random()*3)+1) 
      
    }


  return (
    <div>
        <div>
            <button onClick={chNum}>1</button>
            <button onClick={chNum}>2</button>
            <button onClick={chNum}>3</button>
        </div>

        <div>
            내가 입력한 숫자 : {inputNum}
            <br />
            랜덤한 숫자 : { ranNum }
            <br />
            
            {/* 쌤풀이 */}
            결과 : {inputNum==ranNum ? "정답!" : "땡!"}
            
        </div>
    </div>
  )
}

export default MyState02_2_teacher;