import React from 'react'
import { useContext , useRef} from 'react'
import { TextContext } from '../App'

const SubItem03 = () => {
    const set = useContext(TextContext)
    // const set = setText()
    const inputRef= useRef();

    function chText(){
        //input태그에 적은 내용으로 text state값을 바꾸겠습니다
        set(inputRef.current.value)
    }
  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={chText}>출력</button>
    </div>
  )
}

export default SubItem03