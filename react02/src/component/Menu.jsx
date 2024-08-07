// 240805 (4)
// 컴포넌트의 이름 시작은 반드시 대문자로 작성해야 한다!!!
// --> 일반 태그와 구분하기 위함

// 컴포넌트 : 사용자 정의 태그
// 만드는 방법 --> JSX 문법을 사용해서 생성가능
// 클래스 컴포넌트 , 함수 컴포넌트 (주로 사용)
// rafce : 함수형 컴포넌트 생성 단축키 // 자: es7 extension 설치 이후 가능

import React from 'react'

const Menu = (props) => {
  // 240806(1)
  // 전달된 데이터는 객체 형태이다(key - value)
  console.log(props)

  return (
    <div>
        <p>{props.menu}</p>
        <p>{props.price}</p>

    </div>

  )
}

export default Menu


