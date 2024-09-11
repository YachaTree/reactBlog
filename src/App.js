/* eslint-disable */

import "./App.css";
import {useState} from 'react'



function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학'])
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">ReactBLog</div>
      
      <button onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy)
      }}>가나다순 정렬</button>
      
      {
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>
              { 글제목[i] }             
            </h4>
            <span onClick={()=>{ 
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)  
              }}>👍{따봉[i]}</span> 
            <p>2월 7일 발행</p>
          </div>)
        })
      }

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
