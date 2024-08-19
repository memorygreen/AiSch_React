import logo from './logo.svg';
import './App.css';
import Left01 from './component/Left01';
import Rigth01 from './component/Rigth01';
import { createContext, useState } from 'react';
import SubItem01 from './component/SubItem01';
import MyColor from './component/MyColor';
import Result from './component/Result';


//240813(5)
// 공유공간(context) 생성
export const AppContesxt = createContext();

export const TextContext = createContext();
export const ColorContext = createContext();


  // 240813(4) contextAPI
  
  function App() {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    const [color, setColor] = useState('black');
  
  // num, setNum을 Left01과 Right01에 넘겨서 (전달)
  // Right01에 있는 버튼을 클릭했을 때
  // Left01에 있는 숫자를 바꾸고 싶습니다

  return (
    <div id='container'>
      <h1>Root</h1>
      <div id='grid'>
        {/* 
          Provider : 공유공간 허용하겠습니다
          --> 허용된 컴포넌트의 자식 컴포넌트까지 전부 허용 가능함

          value : 공유 공간에서 공유하며 사용할 공유값 지정
        */}
        {/* <AppContesxt.Provider value={{state:num, setState: setNum}}>
          <Left01></Left01>
          <Rigth01></Rigth01>
        </AppContesxt.Provider> */}

          {/* 240813 */}
        {/* <h1>Context 실습</h1>
        <h1>{text}</h1>
        <TextContext.Provider value={setText}>
          <SubItem01></SubItem01>
        </TextContext.Provider> */}

        {/* 240814(1) */}
        <ColorContext.Provider value={{state:color,setState:setColor}}>
          <MyColor></MyColor>
          <hr></hr>
          <Result></Result>
        </ColorContext.Provider>


      
        
      </div>
    </div>
  );
}

export default App;
