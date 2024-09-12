/* eslint-disable */

import "./App.css";
import {useState} from 'react'



function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  

  return (
    <div className="App">
      <div className="black-nav">ReactBLog</div>
      
      {/* 글제목 정렬 버튼 */}
      <button onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy)
      }}>가나다순 정렬</button>
      
      {/* 게시글 목록 렌더링 */}
      {
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>
              { 글제목[i] }
              <span onClick={(e)=>{
                e.stopPropagation(); 
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)  
              }}>👍{따봉[i]}</span>             
            </h4>
            <p>2월 7일 발행</p>
            {/* 글삭제 */}
            <button onClick={()=>{
              let copy = [...글제목];
              let copy1 = [...따봉];
              copy.splice(i, 1);
              copy1.splice(i, 1);
              글제목변경(copy);
              따봉변경(copy1);
            }}>삭제</button>
          </div>)
        })
      }

      {/* input */}
      <input onChange={(e)=>{ 
        입력값변경(e.target.value); 
        }} placeholder="글제목을 입력하시오"/>

        <button onClick={()=>{
          // 유효성 검사 추가 (공백 제거 후 체크)
          if (입력값.trim() === "") {
            alert("글 제목을 입력하세요.");
            return;
          }
          let copy1 = [...따봉]
          copy1.unshift(0)
          따봉변경(copy1)
          let copy = [...글제목]
          copy.unshift(입력값)   /*unshift: 배열 앞에 추가, push: 배열 끝에 추가 */
          글제목변경(copy)
        }}>글발행</button>

        {/* 모달 */}
      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null    // <Modal 작명={state이름}/>  이렇게 state 자식 컴포넌트에 state 전달
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button >글수정</button>
  </div>
  )
}

export default App;
