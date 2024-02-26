import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from '../Context';


const BgHeader = styled.div`
    width: 23%;
    height: 100%;
    background-color: #a7c6e8;
    border-radius: 50px 0 0 50px;
    font-family: "Rubi";
`;
const HeaderH2 = styled.h2`
    color: white;
    text-align: center;
    padding: 70px 20px 10px 20px;
    font-size: 25px;
    margin: 0;
`;
const HeaderHr = styled.hr`
    background: white;
    height:1px;
    border:0;
    width: 70%;
`;

const HeaderH1 = styled.h2`
    color: white;
    text-align: center;
    font-size: 35px;
    margin: 0;
    padding: 100px 10px 0px 10px;
`;
const HeaderH6 = styled.h2`
    color: white;
    text-align: center;
    margin: 0;
`;
const HeaderP = styled.p`
    color: white;
    text-align: center;
    font-size: 18px;
    margin: 0;
    padding: 110px 10px 0px 10px;
`;

const HeatDate = () => {
    const today = new Date(); // 현재 날짜를 가져온다.
    // 탭틱을 이용하여 문자열 안에 변수를 편하게 쓰기 위함
    const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
    // getDay()는 0~6까지의 숫자만 나오기 때문에 배열을 선언해서 한다.
    const week = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formattedDay = week[today.getDay()];

    const { todos } = useContext(MyContext);
    const totalCount = todos.length; // 전체 항목의 개수를 가져옴
    const doneCount = todos.filter(todo => todo.isChecked).length; // 체크가 된 것의 개수만 가져옴

    return(
        <div>
            <HeaderH1>{formattedDate}</HeaderH1>
            <HeaderH6>{formattedDay}</HeaderH6>
            <HeaderP>{doneCount} / {totalCount}</HeaderP>
        </div>
    );
}

function Header(){
    return(
        <BgHeader>
            <HeaderH2>TODO LIST</HeaderH2>
            <HeaderHr></HeaderHr>
            <HeatDate></HeatDate>
        </BgHeader>
    );
}

export default Header;