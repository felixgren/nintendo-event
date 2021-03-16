// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 5000px;
    /* background-color: #a50505; */

    background-color: ${(props) =>
        // `rgba(${255 * props.divPercentage}, 0, 0, 1)`};
        `rgba(${(1 - props.divPercentage * 2) * 255}, 0, 0, 1)`};
`;

const Sticky = styled.div`
    position: sticky;
    top: 0;
    right: 0;
    height: 50px;
    width: 200px;
    background: lime;
    opacity: 0.5;
`;

const Bowser = () => {
    const WrapperRef = useRef(null);
    const [percentage, setPercent] = useState('255');

    useEffect(() => {
        console.log(WrapperRef.current);
        console.log(window.innerHeight);
        // console.log(WrapperRef.current.offsetTop);
        const onScroll = () => {
            // console.log(window);
            // console.log(window.scrollY);

            const offsetTop = WrapperRef.current.offsetTop;
            const end = offsetTop + WrapperRef.current.offsetHeight;

            const yipie = window.scrollY - offsetTop;

            // const percentage = (yipie / WrapperRef.current.scrollHeight) * 100;
            const ayy =
                yipie / (WrapperRef.current.scrollHeight - window.innerHeight);

            // console.log(ayy);
            // console.log(` percentage: ${percentage}`);
            // console.log(` percentage: ${lmao}`);
            // console.log(window.scrollY);

            if (ayy > 0 && ayy < 1) {
                setPercent(ayy);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Wrapper ref={WrapperRef} divPercentage={percentage}>
            <Sticky>
                <p> {percentage}</p>
            </Sticky>
            <p>yo i don't watch that stuff, these cubes though 🐉🐉🐉</p>
        </Wrapper>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
