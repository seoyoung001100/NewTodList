import React from 'react';
import styled from 'styled-components';

const BgTemplate = styled.div`
    width: 1000px;
    height: 500px;
    background-color: white;
    box-shadow: 0 0 8px #c9cfd6;
    border-radius: 50px;

    margin: 200px auto;

    position: relative;

`;

function Template({children}){
    return <BgTemplate> {children} </BgTemplate>;
}

export default Template;