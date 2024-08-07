import React from 'react'
import { useState , useRef} from 'react'

// 240807(3)
//useRef : 컴포넌트에서 특정 태그를 선택할 수 있는 기능

// 240807(2)
const MyRef01 = () => {
  
    // 240807(3)
    // 태그를 지정할 수 있는 inputRef라는 변수 생성
    const inputRef  = useRef();

    // 240807(2)
    const [inputText, setInputText] = useState('');
    const [inputText2, setInputText2] = useState('');


    // 실습  - 쌤풀이
    function chInput (e){
        // e.target.value
        // e.target : 이벤트를 발생시킨 주체(태그)
        // document.getElementById('myText').value
        
        // setInputText(document.getElementById('myText').value); // 자: 1번방식 비효율적
        // setInputText(e.target.value);
        
        // setInputText(inputText2) //자 :2번 방식이 덜 비효율적

        // 240807(3)
        // inputRef.current : 현재 가리키는 태그 객체
        //                    태그를 바로 사용할 수 있게끔 객체로 가져오는 작업
        setInputText(inputRef.current.value)
        // <input></input> . value
        // inputRef.value
    }

   function chInput2(e){ // 자 : 2번방식
        setInputText(e.target.value)
   }


  return (
    <div>
        {/*  
            ref = {inputRef}
            해당 태그와 inputRef라는 변수를 대응 하겠습니다.
        */}

        <input id='myText' ref={inputRef} onChange={chInput2}></input>
        {/* <button onClick={chBtn}>출력</button> */}
        <button onClick={chInput}>출력</button>
        <h1>{inputText}</h1>

    </div>
  )
}

export default MyRef01