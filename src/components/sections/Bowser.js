// eslint-disable-next-line
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import BowserState from '../../utils/bowserState';
import darkBowserImg from '../../images/bowser/bowser-dark.webp';
import brightBowserImg from '../../images/bowser/bowser.webp';

BowserState() ? console.log('BowserState bool TRUE') : console.log('BowserState bool FALSE');

const Wrapper = styled.div`
    height: 250vh;
    background-color: ${(props) => `rgba(${(props.scrollBg - 0.5) * 200}, 0, 0, 1)`};
    position: relative;
    display: flex;
    justify-content: center;
`;

const DebugBar = styled.div`
    z-index: 1337;
    position: fixed;
    top: 0;
    left: 300px;
    height: 100px;
    width: 200px;
    background: lime;
    opacity: 0.5;
`;

const StyledText = styled(Text)`
    position: sticky;
    z-index: 100;
    top: 100px;
    margin-top: 100px;
    margin-bottom: 125vh;
    height: 100px;
    color: ${(props) => `rgba(${(props.refScrollDecimal - 0.3) * 200}, 0, 0, 0.9)`};
`;

const Fade = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    width: 100%;
    height: 500px;
    max-width: 1440px;
    position: absolute;
    bottom: 500px;
    z-index: 10;
`;

const BeegBowser = styled.img`
    width: 80%;
    max-width: 1440px;
    position: absolute;
    bottom: 500px;
    margin-right: auto;
    margin-left: auto;
    opacity: 0.4;
    transition: 500ms;
`;

const BrightBeegBowser = styled.img`
    z-index: 5;
    width: 80%;
    max-width: 1440px;
    position: absolute;
    bottom: 500px;
    margin-right: auto;
    margin-left: auto;
    opacity: ${(props) => (props.bowserState ? 1 : 0)};
    transition: 500ms;
`;

const Bowser = () => {
    // Ref is like QuerySelect
    // Access to tons of cool values through .current

    // window.innerHeight: viewport height
    // current.offsetTop: pixels from top
    // current.offsetHeight: object pixel height
    // current.scrollHeight: object pixel height?
    // window.scrollY: pixels scrolled from top

    // WIP
    const sessionScrollBgState = (scrollBg) => {
        let key = 'ScrollBgState';

        if (scrollBg != null) {
            sessionStorage.setItem(`${key}`, `${JSON.stringify(scrollBg)}`);
        }
        if (sessionStorage.getItem(`${key}`) === null) {
            sessionStorage.setItem(`${key}`, false);
            return console.log('OH NO!');
        }
        return JSON.parse(sessionStorage.getItem(`${key}`));
    };

    const WrapperRef = useRef(null);
    const [scrollBg, setScrollBg] = useState(sessionScrollBgState());
    const [scrollLock, setScrollLock] = useState(false);
    const [refScrollDecimal, setScrollDecimal] = useState(false);

    document.body.style.overflowY = scrollLock ? 'hidden' : 'auto';

    useEffect(() => {
        const onScroll = () => {
            const offsetTop = WrapperRef.current.offsetTop;
            // eslint-disable-next-line
            const offsetTopRefEnd = offsetTop + WrapperRef.current.offsetHeight;
            const refScrollY = window.scrollY - offsetTop;
            const refHeight = WrapperRef.current.scrollHeight;
            const viewHeight = window.innerHeight;

            const refScrollDecimal = refScrollY / (refHeight - viewHeight);

            if (refScrollDecimal > 0 && refScrollDecimal < 1) {
                // const percentage = Math.round(RefScrollDecimal * 100);
                // setPercent(RefScrollDecimal);
                setScrollBg(1 - refScrollDecimal);
                sessionScrollBgState(scrollBg);
                setScrollDecimal(refScrollDecimal);
            }

            if (refScrollDecimal > 0.75 && !BowserState()) {
                setScrollLock(true);
                BowserState(true);

                setTimeout(() => {
                    setScrollLock(false);
                }, 2000);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollBg]);

    return (
        <Wrapper ref={WrapperRef} scrollBg={scrollBg}>
            <DebugBar>
                <p> scrollBg: {scrollBg}</p>
                <p> scrollRef: {refScrollDecimal}</p>
            </DebugBar>
            <StyledText
                refScrollDecimal={refScrollDecimal}
                transform="uppercase"
                fontSize="120px"
                userSelect="none"
                fontWeight="750"
                textAlign="center"
            >
                Introducing...
            </StyledText>

            <Fade />
            {/* <BeegBowser
                src={BowserState() ? brightBowserImg : darkBowserImg}
                alt="Mega Bowser"
            /> */}
            <BeegBowser src={darkBowserImg} alt="Mega Bowser" />
            <BrightBeegBowser src={brightBowserImg} alt="Mega Bowser" bowserState={BowserState()} />
        </Wrapper>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
