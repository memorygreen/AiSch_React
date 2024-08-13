import React, { useEffect, useRef, useState } from 'react'

// 240808(3) 쌤풀이
    
    // 3.
    // 비교 로직에 사용될 변수
    let com = 0;
    let user = 0;

const MyFinal_useEffect = () => {

    // 1. start 버튼을 클릭했을 때 컴퓨터 주사위, 사용자 주사위가 랜덤하게 다른 주사위로 바꿔주세요
    // 2. 주사위 눈의 크기를 비교해서 Comscore 또는 UserScore 값을 1 증가 시켜주세요!
    // 3. ComScore 또는 UserScore 값이 먼저 10에 도달하게 되는 순간 결과를 출력해주세요 (Com WIN or User WIN)

    // 1.
    const diceArray = ['/dice1.png', '/dice2.png','/dice3.png', 
                       '/dice4.png', '/dice5.png', '/dice6.png'] 
    
    // useRef 변수는 재렌더링에 영향을 받지 않는다!
    const comImgRef = useRef();
    const userImgRef = useRef();

    // 2.
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);

    // 클릭수 추가
    const [num, setNum] = useState(0);

    // 3.
    const [result, setResult] = useState('');
    
    // let com = 0;
    // let user = 0;

    function chDice () {
        //1. 
        let comRanNum = parseInt(Math.random()*6) //자: 0~5 필요! 배열에서 경로값을 가져오는 거니까!
        let userRanNum = parseInt(Math.random()*6)

        comImgRef.current.src = './img' + diceArray[comRanNum];
        userImgRef.current.src = './img' + diceArray[userRanNum];
        
        // 다른 방법(배열사용x)
        // comImgRef.current.src = './img/dice' + comRanNum + '.png';
        // userImgRef.current.src = './img/dice' + userRanNum + '.png';

        // 2.
        // 컴퓨터 주사위와 사용자 주사위 크기를 비교해야 함
        if (userRanNum > comRanNum) {
            user++;
            setUserScore(user+1);

        }else if(userRanNum < comRanNum){
            com++;
            setComScore(com+1);
        }

        // console.log('COM : ', + com);
        // console.log('USER : ' + user);

        setNum(num+1); //클릭수 추가  
    }

        useEffect(()=>{
            if(comScore == 0 || userScore != 0){
            console.log("useEffect")
            // 먼저 10에 도달했다면 com win 또는 user win
            if(comScore == 10){
                setResult('Com WIN')
                
            }else if (userScore == 10){
                setResult('User WIN')
            }
        }
        }, [comScore, userScore])
        // componentDidMoung (자: [ ] -> 의존 배열이 비어있다면 최초 렌더링 시에만 사용)
        // [] -> dependency Array (의존 배열)

    

  return (
    <div>
        <h1>DICE GAME</h1>
        {/* 240813(3) 추가 */}
        <p>클릭수 : {num}</p> 
        <button onClick={chDice}>Start</button>

        <div className="dice">
            <img src='./img/dice1.png' ref={ comImgRef }></img>
            <h1>Com Score : {comScore}</h1>
        </div>
        <div className="dice">
            <img src='./img/dice1.png'  ref={ userImgRef }></img>
            <h1>User Score : {userScore}</h1>
        </div>

        <h1>결과 : {result}</h1>
        </div>
)
}

export default MyFinal_useEffect