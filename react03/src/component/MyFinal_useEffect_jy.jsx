import React, { useRef, useState , useEffect} from 'react'

// 240813 (3) - useEffect로 변경하기

const MyFinal_useEffect_jy = () => {

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

    // 3.
    const [result, setResult] = useState('');
    


    function chDice () {
        //1. 
        let comRanNum = parseInt(Math.random()*6) //자: 0~5 필요! 배열에서 경로값을 가져오는 거니까!
        let userRanNum = parseInt(Math.random()*6)

        comImgRef.current.src = './img' + diceArray[comRanNum];
        userImgRef.current.src = './img' + diceArray[userRanNum];
        

        // 2.컴퓨터 주사위와 사용자 주사위 크기를 비교
        if (userRanNum > comRanNum) {
            // user++;
            setUserScore(userScore+1);

        }else if(userRanNum < comRanNum){
            // com++;
            setComScore(comScore+1);
        }
    }

    useEffect(()=>{
        // 먼저 10에 도달했다면 com win 또는 user win
        if(comScore == 10){
            setResult('Com WIN')

        }else if (userScore == 10){ 
            setResult('User WIN')
        }

    })
    

  return (
    <div>
        <h1>DICE GAME</h1>
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

export default MyFinal_useEffect_jy