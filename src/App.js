import React from 'react';
import { createGlobalStyle } from 'styled-components';

// ----------------- 컴포넌트 받아오기 -------------------
import Template from './components/Template';
import Header from './components/Header';
import Create from './components/Create';
import List from './components/List';
import { MyProvider } from './Context';

// ----------------- 글로벌스타일시트 -------------------
const GlobalStyle = createGlobalStyle`
  html, body {
      /* height: 1080px; */
  }
  body{
    background: linear-gradient(45deg, #edf1f5, #bbd1f0);
    height: 100vh;
  }
`;

function App() {
  return (
    <>
    <MyProvider>
      {/* 글로벌스타일은 자식 컴포넌트를 가질 수 없기 때문에 내부 태그들을 싸버리면 내부 태그들이 제대로 안 보인다. */}
      <GlobalStyle/> 
      <Template>
        <Header></Header>
        <List></List>
        <Create></Create>
      </Template>
    </MyProvider>  
    </>
  );
}

export default App;
