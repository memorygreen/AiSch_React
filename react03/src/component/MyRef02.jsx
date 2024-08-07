import React, { useRef, useState } from 'react'

// 240807 (3)

    // 배열 사용해서 이미지 데이터 다루기
    // 
    const MyRef02 = () => {


        // 자영풀이
        const img_ref = useRef();
        const arr_img = ['img/jogooman1.jpg', 'img/jogooman2.jpg', 'img/jogooman3.jpg']
        const [num, setNum] = useState(0);
        
        
        function btn_next_jy (){
            if(num<2){
                setNum(num+1)
                img_ref.current.src=arr_img[num]
                
            }else{
                setNum(0)
                img_ref.current.src=arr_img[num]
            }
        }

        function btn_pre_jy (){

            if(num>0){
                setNum(num-1)
                img_ref.current.src=arr_img[num]
            }else{
                setNum(2)
                img_ref.current.src=arr_img[num]
            }

        }
        
        // 240807(4)
        // 쌤풀이


        // 배열 사용해서 이미지 데이터 다루기
        const imgArray = ['/jogooman1.jpg', '/jogooman2.jpg', '/jogooman3.jpg']
        // UseRef, useState
        const imgRef = useRef();
        
        let pos = 0; // 현재 이미지 위치
        function nextImg(){
        
                pos++;
                if(pos>imgArray.length-1){
                    pos=0
                }
                imgRef.current.src='./img'+imgArray[pos];  
           
        }
        
        function beforeImg(){
            pos--;
            if(pos<0){
                pos=2
            }
            imgRef.current.src='./img'+imgArray[pos];   

        }

  return (
    <div>
        <img src='img/jogooman1.jpg' ref={imgRef}></img> 
        {/* 자: index.html이 public에 있으니까  */}
        <br></br>
        <button onClick={beforeImg}>button</button>
        <button onClick={nextImg}>next</button>

    </div>
  )
}

export default MyRef02