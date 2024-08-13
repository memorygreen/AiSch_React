import React from 'react'

// 240808(4)
// 자: 배열 다루기

const MyMap = () => {
    const menu = ['짬뽕', '짜장면', '냉면', '탕수육']

    const manu2 = [<li>짬뽕</li>, <li>짜장면</li>, <li>냉면</li>, <li>탕수육</li>]
    // map, filter 
    // map : 배열 안에 있는 요소들에 규칙을 부여해서 새로운 배열을 만든다!
  return (
    <div>
        <ul>
            {/* <li>{menu[0]}</li>
            <li>{menu[1]}</li>
            <li>{menu[2]}</li>
            <li>{menu[3]}</li> */}

            {/* {manu2} */}
            
            {/* {menu.map((data)=><li>{data}</li>)} */}

            {/* 
                data : 배열이 가지고 있는 요소가 순차적으로 들어옴
                index : 배열 인덱스 값이 순차적으로 들어옴
            */}
            {menu.map((data, index)=><li key={index}>{data}</li>)}


            <hr></hr>
            {/* menu 배열 중 탕수육을 제외한 나머지만 출력 */}
            {menu.filter((data, index)=>data!="탕수육")}
        </ul>
    </div>
  )
}

export default MyMap