import React from 'react';
import styled from 'styled-components';
// import { IoIosCloud } from "react-icons/io";
// import { IoIosCloudOutline } from "react-icons/io";
import Item from './Item';
import { useContext } from 'react';
import { MyContext } from '../Context';

const ItemList = styled.div`
    width: 710px;
    height: 450px;
    overflow-y: auto;

    //위치 조정
    position: absolute;
    top: 50%;
    left: 61.5%;
    transform: translate(-50%, -50%);
    z-index: 5;
`;

function List(){
    const { todos } = useContext(MyContext);
    //MyContext에서 todos를 가져옴 (context 데이터를 담고 있고 그걸 가져옴)

    console.log(todos);

    return(
        <ItemList>
            {todos.map((todo, index) => (
                <Item key={index} {...todo} index={index} />
            ))}
        </ItemList>
    );
}

export default List;