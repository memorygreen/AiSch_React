import React, { useRef, useState } from 'react'

// 240808(1-2)

// 자 : 10이 돼도 win이 안 뜸-> 비교할 점수의 state 변수 & 일반변수도 만들어야함
let user_score = 0;
let com_score = 0;

const MyFinal_jy = () => {


    // 1. start 버튼을 클릭했을 때
    //    컴퓨터 주사위, 사용자 주사위가 랜덤하게 다른 주사위로 바꿔주세요
    // 2. 주사위 눈의 크기를 비교해서
    // Comscore 또는 UserScore 값을 1 증가 시켜주세요!
    // 3. ComScore 또는 UserScore 값이 먼저 10에 도달하게 되는 순간
    // 결과를 출력해주세요 (Com WIN or User WIN)


    
    const user_img_ref = useRef();
    const com_img_ref = useRef();

    const img_arr = ['./img/dice1.png', './img/dice2.png','./img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png'] 


    // 점수
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);

    // 10에 도달하면 결과 띄우기
    const [result, setResult] = useState('');


    function play () {
        let com_num = parseInt(Math.random()*6)
        let user_num = parseInt(Math.random()*6)
        user_img_ref.current.src = img_arr[user_num];
        com_img_ref.current.src = img_arr[com_num];


        
        if (user_num > com_num) {
            user_score++;
            setUserScore(user_score);

            // if (userScore == 10){
            //     setResult('User WIN!!!!!!')
            // }
        }else if(user_num < com_num){
            com_score++;
            setComScore(com_score);
            
            // if (comScore == 10){
            //     setResult('Com WIN!!!!!!')
                
            // }
           
        }


        if (user_score == 10 && com_score < 10){
            setResult('User WIN!!!!!!')
        }else if(com_score == 10 && user_score < 10){
            setResult('Com WIN!!!!!!')
            
        }


    }
    

  return (
    <div>
        <h1>DICE GAME</h1>
        <button onClick={play}>Start</button>

        <div className="dice">
            <img src={'./img/dice1.png'} ref={ com_img_ref}></img>
            <h1>Com Score : {comScore}</h1>
        </div>
        <div className="dice">
            <img src={'./img/dice1.png'}  ref={user_img_ref}></img>
            <h1>User Score : {userScore}</h1>
        </div>

        <h1>결과 : {result}</h1>
        </div>
)
}

export default MyFinal_jy