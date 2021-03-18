import styled from 'styled-components';
import React, { useState } from 'react';

const TestyTestDiv = styled.div`
    position: absolute;
    z-index: 1000;
    width: 100px;
    height: 100px;
    background-color: tomato;
    top: 0;
    right: 0;
`;

const TestyTest = () => {
    const [isClicked, setClicked] = useState(false);
    const [color, setOrange] = useState('black');

    console.log(isClicked);
    return (
        <TestyTestDiv>
            <p>hej</p>
        </TestyTestDiv>
    );
};

export default TestyTest;
