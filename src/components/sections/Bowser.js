// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SessionTester from './SessionTester';

const Wrapper = styled.div`
    height: 5000px;
    /* background-color: #a50505; */

    background-color: ${(props) =>
        // `rgba(${(1 - props.divPercentage) * 255}, 0, 0, 1)`};
        `rgba(${props.scrollBg * 255}, 0, 0, 1)`};
`;

const Sticky = styled.div`
    position: sticky;
    top: 0;
    left: 300px;
    height: 100px;
    width: 200px;
    background: lime;
    opacity: 0.5;
`;

const Bowser = () => {
    // Ref is like QuerySelect
    // Access to tons of cool values through .current

    // window.innerHeight: viewport height
    // current.offsetTop: pixels from top
    // current.offsetHeight: object pixel height
    // current.scrollHeight: object pixel height?
    // window.scrollY: pixels scrolled from top

    const WrapperRef = useRef(null);
    const [scrollBg, setScrollBg] = useState('255');
    const [scrollLock, setScrollLock] = useState(false);
    const [refScrollDecimal, setScrollDecimal] = useState(false);

    document.body.style.overflowY = scrollLock ? 'hidden' : 'auto';

    useEffect(() => {
        const onScroll = () => {
            const offsetTop = WrapperRef.current.offsetTop;
            const offsetTopRefEnd = offsetTop + WrapperRef.current.offsetHeight;
            const refScrollY = window.scrollY - offsetTop;
            const refHeight = WrapperRef.current.scrollHeight;
            const viewHeight = window.innerHeight;

            const refScrollDecimal = refScrollY / (refHeight - viewHeight);

            if (refScrollDecimal > 0 && refScrollDecimal < 1) {
                // const percentage = Math.round(RefScrollDecimal * 100);
                // setPercent(RefScrollDecimal);
                setScrollBg(1 - refScrollDecimal);
                setScrollDecimal(refScrollDecimal);
            }

            // if (refScrollDecimal > 0.7) {
            //     setScrollLock(true);
            //     setTimeout(() => {
            //         setScrollLock(false);
            //     }, 5000);
            // }
        };

        // setTimeout(() => {
        //     console.log(scrollLock);
        // }, 1000);

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Wrapper ref={WrapperRef} scrollBg={scrollBg}>
            <SessionTester />
            <Sticky>
                <p> scrollBg: {scrollBg}</p>
                <p> scrollRef: {refScrollDecimal}</p>
            </Sticky>
            <p>yo i don't watch that stuff, these cubes though 🐉🐉🐉</p>
        </Wrapper>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
