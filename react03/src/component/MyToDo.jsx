import React from 'react'
import { useState, useRef, useEffect } from 'react'
let listArray = [];
const MyToDo = () => {
    // 아래 아인씨 코드
    // 240809(금) 수업내용

    const [todo, setTodo] = useState([]);
    const inputRef = useRef();
    
    function getData(){
        
        // push 사용해서 state 배열 변환 X
        // ㄴ-> push 자체가 기존 state배열을 바꾸는 기능이기때문에
        // (state값을 바꿀수 있는 것은 setState만 가능하기때문에!!)
        // todo.push(inpuRef.current.value)
        // ⭐concat : 기존 배열에 데이터를 추가한 모습으로 새로운 배열을 생성하는 기능
        
        setTodo(todo.concat(inputRef.current.value))
    }

    // 240813(2) 생명주기
    // componentDidUpdate(){
    //     if(todo.length == 5){
    //         alert("최대 목표 개수에 도달했습니다")
    //     }
    // }

    // 240813(1)  // useEffect()
    // state 변수에 의해서 실행 되어지는 함수
    // state 변수에 지정되는 함수를 만들겠다

    // useEffect : 함수 컴포넌트에서 lifeCycle을 기준으로 실행시키는 함수
    // useEffect = componentDidMount + componentDidUpdate
    useEffect(()=>{
        // 최대 목표 개수에 도달했습니다!!
        console.log("useEffect")
        if(todo.length == 5){
            alert("최대 목표 개수에 도달했습니다")
        }
    })

    function delList(delIndex){

        // 넘겨받은 인덱스 값을 제외한 다른 요소만으로 배열을 바꾸기
        // todoList.filter((data, index)=> index !== delIndex)
        // listSet(todoList.filter((data, index)=> index !== delIndex));
        setTodo(todo.filter((_, index)=> index !== delIndex));
      

        
        
    }
    return (
        <div>
            <h1>2024 올해는 꼭 해봅시다!</h1>
            <input type="text" placeholder='계획을 입력하세요' ref={inputRef}></input>    
            <button onClick={getData}>계획추가하기</button>
            <hr />
            <h1>목록</h1>
            <ul>
                {/* 목록 출력 */}
                {todo.map((data,index)=>
                
                <div key={index}  className='li_div'>
                            <li key={index} >{data}</li> 
                            <button key={index} onClick={()=>delList(index)}>삭제</button>
                        </div>
                
                )}
                
            </ul>
        </div>
    )
}

export default MyToDo