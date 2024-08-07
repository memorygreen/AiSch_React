import React from 'react'
import { useState } from 'react';

// 240806(4)
const MyState02 = () => {
    // 1. 버튼 클릭 시 어떤 버튼을 클릭했는지 숫자를 출력해주세요!
    // 2. 버튼 클릭 시 1~3 랜덤 수 생성 -> 랜덤 숫자 부분에 출력

    const [num, setNum] = useState(0);

  return (
    <div>
        <div>
            <button onClick={()=>setNum(1)}>1</button>
            <button onClick={()=>setNum(2)}>2</button>
            <button onClick={()=>setNum(3)}>3</button>
        </div>

        <div>
            내가 입력한 숫자 : {num}
            <br />
            랜덤한 숫자 : {((Math.floor(Math.random()*3)+1))}
            <br />
        </div>
    </div>
  )
}

export default MyState02;