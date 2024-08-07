function App2 () {
    
    //prompt : 이름 입력
    // 현재 날짜
    // 3~5 월 : 봄, 6~8 : 여름, 9~11월 : 가을, 12~2월 : 겨울
    
    // 240805 (3-4)
    // 쌤풀이 
    const date = new Date();
    let name = prompt("이름 입력");
    // 2024년도
    let year = date.getFullYear() 
    // 월
    let month = Number(date.getMonth())+1;// 자: 월이 0부터 가져와져서 +1 필수!
    // 일
    let day = date.getDate();

    let season = ""
    if (month >= 3 && month <=5){
        season = '봄'
    } else if (month >= 6 && month <= 8) {
        season = '여름'
    } else if (month >= 9 &&month <= 11) {
        season = '가을'
    } else {
        season = '겨울'
    }
    
    // 240805(4)
    let myStyle = {
        color:'red'
    }
    return(
        <div>
            <h1>{year}. {month}. {day}.</h1>
            <hr></hr>
                <p>
                    {name}님 지금은 {season}입니다
                    좋은 하루 보내세요!
                </p>

                {/* 240805(4) */}
                {/* JSX 문법에서 자주 사용되어지는 방법
                    
                    1. style 적용
                    inline(태그 안에) 적용 시 객체 형식으로 적용 해야한다!
                    
                    2. 삼항연산자
                    조건을 통해서 다른 내용을 사용자에게 보여줄 때 사용됨!
                    

                */}
                
                {/* 자영을 제외한 다른 사람은 야근 */}
                { name == '자영' ? 
                    <div>
                        <h1>칼퇴</h1> 
                        <h1 style={myStyle}>오늘은 월요일</h1>
                    </div>
                        :
                        <h1>야근</h1>
                    }
                
                
            
        </div>
    )
}

export default App2