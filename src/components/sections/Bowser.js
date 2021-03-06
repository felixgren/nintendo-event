import React, { useState, useRef, useEffect } from 'react';
import { useBowser, useBowserUpdate } from './BowserContext';
import styled from 'styled-components/macro';
import Text from '../Text';
import BowserSession from '../../utils/bowserSession';
import darkBowserImg from '../../images/bowser/bowser-dark.webp';
import brightBowserImg from '../../images/bowser/bowser.webp';

BowserSession()
    ? console.log('BowserSession bool TRUE')
    : console.log('BowserSession bool FALSE');

const Wrapper = styled.div`
    height: 250vh;
    background-color: ${(props) =>
        `rgba(${(props.scrollBg - 0.5) * 200}, 0, 0, 1)`};
    position: relative;
    display: flex;
    justify-content: center;
    transition: 0.3s;
`;

const DebugBar = styled.div`
    z-index: 1337;
    position: fixed;
    top: 0;
    right: 0;
    height: 120px;
    width: 100px;
    background: lime;
    opacity: 0.5;
    pointer-events: none;
    & > p {
        padding: 2px;
    }
`;

const StyledText = styled(Text)`
    position: sticky;
    z-index: 100;
    top: 100px;
    margin-top: 100px;
    margin-bottom: 125vh;
    height: 100px;
    transition: 0.3s;
    color: ${(props) =>
        `rgba(${(props.refScrollDecimal - 0.3) * 200}, 0, 0, 0.9)`};
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
    opacity: ${(props) => (props.isEvil ? 1 : 0)};
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
            sessionStorage.setItem(`${key}`, 0);
            return console.log('OH NO!');
        }
        return JSON.parse(sessionStorage.getItem(`${key}`));
    };

    const WrapperRef = useRef(null);
    const [scrollBg, setScrollBg] = useState(sessionScrollBgState());
    const [refScrollDecimal, setScrollDecimal] = useState(false);

    const isEvil = useBowser();
    const setEvil = useBowserUpdate();

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
                setScrollBg(1 - refScrollDecimal);
                sessionScrollBgState(scrollBg);
                setScrollDecimal(refScrollDecimal);
            }

            if (refScrollDecimal > 0.75 && !isEvil) {
                document.body.style.opacity = 0;
                document.body.style.overflowY = 'hidden';
                document.body.style.transition = 'opacity 800ms';

                setTimeout(() => {
                    setEvil(true);
                    window.scrollTo({ top: 0, left: 0 });
                    document.body.style.overflowY = 'auto';
                    document.body.style.opacity = 1;
                }, 800);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollBg]);

    return (
        <Wrapper ref={WrapperRef} scrollBg={scrollBg}>
            <DebugBar>
                <p> isEvil bool: {isEvil ? 'TRUE' : 'FALSE'}</p>
                <p> scrollBg: {scrollBg}</p>
                <p> scrollRef: {refScrollDecimal}</p>
            </DebugBar>
            <StyledText
                refScrollDecimal={refScrollDecimal}
                transform="uppercase"
                fontSize={['36px', '120px']}
                userSelect="none"
                fontWeight="750"
                textAlign="center"
            >
                Introducing...
            </StyledText>

            <Fade />
            <BeegBowser src={darkBowserImg} alt="Mega Bowser" />
            <BrightBeegBowser
                src={brightBowserImg}
                alt="Mega Bowser"
                isEvil={isEvil}
            />
        </Wrapper>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
