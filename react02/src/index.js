import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import Menu from './component/Menu';
import reportWebVitals from './reportWebVitals';
import MyTeamJy from './component/MyTeamJy';
import MyTeam from './component/MyTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      {/* 
        props : 컴포넌트로 데이터를 전달하는 방법 
              --> 속성 값으로 데이터를 전달
      */}
      {/* 240806(1) */}
      {/* <Menu menu="아메리카노" price="4100"></Menu> */}

      {/* 카페라떼, 4500 */}
      {/* <Menu menu="카페라떼" price="4500"></Menu> */}


      {/* 240806(2) 실습 자영풀이 */}
      {/* <MyTeamJy team="교육운영부" name="선영표"></MyTeamJy>
      <MyTeamJy team="전략기획팀" name="강예진"></MyTeamJy>
      <MyTeamJy team="홍보팀" name="임보미"></MyTeamJy>
      <MyTeamJy team="기획팀" name="최영화"></MyTeamJy> */}

      {/* 240806(2) 실슴 쌤 풀이 */}
      <MyTeam departmentName = "교육운영" name ="선영표"></MyTeam>
      <MyTeam departmentName = "전략기획" name ="강예진"></MyTeam>
      <MyTeam departmentName = "홍보" name ="임보미"></MyTeam>
      <MyTeam departmentName = "기획" name ="최영화"></MyTeam>


      {/* 240806(2) */}
      {/* 
        신생 부서
        부서명 : 연구개발
        직원 : X
      */}
      
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
