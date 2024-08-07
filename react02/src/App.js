import logo from './logo.svg';
import './App.css';

// 240805 (2)
// JSX : JavaScript 와 html 을 한 번에 사용할 수 있는 문법
// --> 사용자 정의태그(컴포넌트)를 만드는 방법

// 규칙1. 출력하고자 하는 태그들은 반드시 하나의 부모 요소로 묶여 있어야 한다.
// 규칙2. 표현식 사용 가능하다(JavaScript 변수를 html 에서 출력할 수 있다)
// 규칙3. 모든 태그는 반드시 여는 태그와 닫는 태그가 존재한다.
// 규칙4. class --> className 을 사용한다!

function App() {

  ////1-1.  o
  let name = "자영";
  console.log(`${name}님 환영합니다`)

  return (
    ////1-2.  x
    <div>
      <h1 className="test">MyReact01</h1>
      <h1>MyReact02</h1>

      <p>{name} 님 환영합니다.</p>
      <br></br>
      <input></input>
      <img></img>

    </div>


  );
}

export default App;
