import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {

  //1.자바스크립트로 앨리먼트 생성하기
  let element1 = React.createElement("div", null, "Hello");

  //2.리액트의 jsx로 앨리먼트 생성하기 / 리액트에서 jsx가 더 보기에 편함
   let element2 = <div>Hello</div>

  const content = "변경할콘텐츠";
  const namePlaceholder = "이름을 입력하세요!";


  // JSX 문법에서 변수를 표현할 때는 아래처럼 {} 중괄호를 사용
  return (
    <div>

    {element1}
    {element2}

    <div> {content} </div>
    <input placeholder={namePlaceholder}></input>
    </div>
  );
}

export default App;
