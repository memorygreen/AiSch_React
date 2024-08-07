import logo from './logo.svg';
import './App.css';
import  MyState01 from './component/MyState01';
import  MyState02 from './component/MyState02';
import MyState02_teacher from './component/MyState02_teacher';
import MyState02_2_jy from './component/MyState02_2_jy';
import MyState02_2_teacher from  './component/MyState02_2_teacher'
import  MyState03_jy from './component/MyState03_jy';
import  MyState03 from './component/MyState03'; // 240807(1)
import MyState02_3_teacher from  './component/MyState02_3_teacher' 
import MyRef01 from './component/MyRef01'; // 240807(2)
import MyRef02 from './component/MyRef02';

function App() {
  return (
    <div className="App">
      {/* <MyState01></MyState01> */}
      {/* <MyState02></MyState02> */}
      {/* <MyState02_teacher></MyState02_teacher> */}
      {/* <MyState02_2_jy></MyState02_2_jy> */}

      {/* 240807(1) */}
      {/* <MyState02_teacher></MyState02_teacher> */}
      
      {/* <MyState03_jy></MyState03_jy>자영풀이 */}
      {/* <MyState03></MyState03>쌤풀이 */}

      {/* 240807(2) */}
      {/* <MyState02_3_teacher></MyState02_3_teacher> */}

      {/* <MyRef01></MyRef01> */}

      {/* 240807(3) */}
      <MyRef02></MyRef02>

    </div>
  );
}

export default App;
