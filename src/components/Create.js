import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { css } from 'styled-components';
import { MyContext } from '../Context';

// +버튼 디자인
const Btn = styled.button`
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 50%;
    background-color: #a7c6e8;
    color: white;
    font-size: 45px;

    //중앙 정렬
    display: flex;
    align-items: center;
    justify-content: center;

    //위치 조정
    position: absolute;
    top: 85%;
    left: 92%;
    transform: translate(-50%, -50%);
    z-index: 5;
    transition: 0.125s all ease-in; // +모양이 움직이게 액션을 줌
    &:hover{
        background-color: #c1ddf5;
    }
    //props 안에 push가 있을때 이 CSS를 실행시켜라
    ${props =>
        props.push && css`
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: white;
        color: #a7c6e8;
        &::after{
            background-color: white;
        }
        &:hover{
            background-color: #f7f8fa;
        }
        `
    }
`;

// 입력창 디자인
const Form = styled.form`
    width: 710px;
    height: 100px;
    background-color: #e4edf5;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    //위치 조정
    position: absolute;
    top: 85%;
    left: 61.5%;
    transform: translate(-50%, -50%);
    z-index: 5;
`;

const Input = styled.input`
    width: 700px;
    height: 90px;
    border-radius: 50px;
    border: none;
    background-color:transparent;
    outline: none;

    padding: 10px 40px 10px 40px;

    display: block;
    transition-property: all;
    transition-duration: 1s;

    font-size: 20px;
    color: #325a94;
    &::placeholder{
        color: #9ab4db;
        font-family: "GaeguR"
    }
    font-family: "GaeguR";
`;


function Create(){
    const [push, setPush] = useState(false);
    const [text, setText] = useState(''); 
    //MyContext에서 addtodo라는 함수를 가져옴. 할 일을 추가하는 함수
    const { addTodo } = useContext(MyContext); 
  
    const toggle = () => setPush(prev => !prev);
  
    // 입력받은 값을 가져와 text 상태를 업데이트 한다
    // input에 텍스트가 입력되면 발생
    const handleChange = (e) => { 
      setText(e.target.value);
    };
  
    // 폼 제출(새로운 할 일을 입력 하고 enter를 눌렀을때) 이벤트가 발생했을 때 호출
    const handleSubmit = (e) => { 
      e.preventDefault(); // 새로운 할 일을 추가
      addTodo(text); // 새로운 할 일을 추가
      setText(''); // text 상태를 초기화 함 ''<< 빈 문자
      toggle(); // 토글 값을 호출
    };
    // push가 안 돼.....
  
    return(
      <>  
        {push && 
          <Form onSubmit={handleSubmit}> {/* onSubmit: e.preventDefault() << 이거랑 세트로 쓴다 */}
            <Input 
              autoFocus 
              value={text} 
              onChange={handleChange} // event.target.value << 세트로 쓰인다 상태를 실시간 업데이트 함
              placeholder='항목을 입력하세요.'
            />
          </Form>
        }
        
        <Btn onClick={toggle} push={push}>
          <MdAdd />
        </Btn>
      </>
    );
  };
  
  export default Create;