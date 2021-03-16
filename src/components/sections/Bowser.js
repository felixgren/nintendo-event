// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

const Wrapper = styled.div`
    height: 300px;
    background-color: #a50505;
`;

const YayCube = styled.div`
    height: 50px;
    width: 50px;
    background-color: green;
`;

const Bowser = () => {
    const animationRef = useRef(null);

    useEffect(() => {
        animationRef.current = anime({
            translateX: 1000,
            targets: `${YayCube}`,
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 1000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
        });
    });

    return (
        <Wrapper>
            <p>yo i don't watch that stuff, these cubes though 🐉🐉🐉</p>
            <YayCube />
            <button onClick={() => animationRef.current.restart()}>
                reset
            </button>
        </Wrapper>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
