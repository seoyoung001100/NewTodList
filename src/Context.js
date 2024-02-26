import React, { createContext, useState } from 'react';

// context를 만듦
const MyContext = createContext();

// MyProvider 라는 컴포넌트 선언 (app.js에서 사용)
// 이 컴포넌트로 싸야하기 때문에 { children } 속성을 넣어준다. 자식 컴포넌트에 해당이 되어야 하기 때문에 
const MyProvider = ({ children }) => {
  const [todos, setTodos] = useState([]); //초기값이 빈배열, useState를 이용해 배열을 채우고 상태를 변화함

  //할 일을 추가하는 함수 선언. 매개변수는 text
  const addTodo = (text) => {
    setTodos([{ text, isChecked: false }, ...todos]); //체크박스의 기본 값은 false로 설정. ... << 배열을 추가할 때 사용
  };

  //체크 박스의 상대를 변화하는 함수. 반복문을 사용하여 해당 인덱스 값의 상태를 변화함
  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, isChecked: !todo.isChecked } : todo))
    );
  };

  // 위쪽의 해당 인덱스 값을 받아 삭제하는 기능
  const removeTodo = (index) => {
    if(!window.confirm('삭제하시면 복구할 수 없습니다. \n 정말로 삭제 하시겠습니까?')){
      //confirm 사용할 때 반드시 window.confirm << 형식으로 같이 써야 오류가 안 남
    }
    else{
      return setTodos(todos.filter((_, i) => i !== index));
      // 현재 요소의 값, 현재 요소의 인덱스, 원본 배열. << 콜백함수에서 사용 하지만 _ 이건 현재 사용되지 않는다는 의미
    }
  };

  return (
    // 데이터들을 제공하여 넘김
    <MyContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </MyContext.Provider>
  );
};

// context와 컴포넌트를 넘김
export { MyContext, MyProvider };

