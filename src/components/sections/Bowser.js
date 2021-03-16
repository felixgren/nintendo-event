// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 5000px;
    /* background-color: #a50505; */

    background-color: ${(props) =>
        // `rgba(${255 * props.divPercentage}, 0, 0, 1)`};
        `rgba(${(1 - props.divPercentage) * 255}, 0, 0, 1)`};
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
    // Ref is like QuerySelect
    // Access to tons of cool values through .current

    // window.innerHeight: viewport height
    // current.offsetTop: pixels from top
    // current.offsetHeight: object pixel height
    // current.scrollHeight: object pixel height?
    // window.scrollY: pixels scrolled from top

    const WrapperRef = useRef(null);
    const [percentage, setPercent] = useState('255');
    useEffect(() => {
        const onScroll = () => {
            const offsetTop = WrapperRef.current.offsetTop;
            const offsetTopRefEnd = offsetTop + WrapperRef.current.offsetHeight;
            const refScrollY = window.scrollY - offsetTop;
            const refHeight = WrapperRef.current.scrollHeight;
            const viewHeight = window.innerHeight;

            const RefScrollDecimal = refScrollY / (refHeight - viewHeight);

            if (RefScrollDecimal > 0 && RefScrollDecimal < 1) {
                setPercent(RefScrollDecimal);
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
