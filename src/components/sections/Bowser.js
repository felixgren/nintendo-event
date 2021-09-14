import React, { useState, useRef, useEffect } from 'react';
import { useBowser, useBowserUpdate } from './BowserContext';
import styled from 'styled-components/macro';
import Text from '../Text';
import darkBowserImg from '../../images/bowser/bowser-dark.webp';
import brightBowserImg from '../../images/bowser/bowser.webp';
import theme from '../../utils/theme';

const Wrapper = styled.div`
    height: ${(props) => (props.isEvil ? '90vh' : '160vh')};
    max-height: ${(props) => (props.isEvil ? '700px' : '860px')};
    background-color: ${(props) =>
        `rgba(${(props.scrollBg - 0.5) * 200}, 0, 0, 1)`};
    position: relative;
    display: flex;
    justify-content: center;
    transition: 0.3s;
    overflow: hidden;
    border-bottom: ${(props) => (props.isEvil ? '0px' : '300px solid black')};

    ${theme.bp.desktop} {
        overflow: unset;
        height: ${(props) => (props.isEvil ? '120vh' : '250vh')};
        min-height: ${(props) => (props.isEvil ? '1200px' : '1600px')};
        max-height: ${(props) => (props.isEvil ? '1200px' : '1600px')};
    }
`;

const StyledText = styled(Text)`
    position: sticky;
    z-index: 100;
    top: 40px;
    margin-top: 100px;
    margin-bottom: 140vh;
    height: 100px;
    transition: 0.3s;
    color: ${(props) =>
        `rgba(${(props.refScrollDecimal - 0.15) * 300}, 0, 0, 0.9)`};

    ${theme.bp.desktop} {
        top: 30px;
        margin-top: 140px;
    }
`;

const Fade = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    width: 100vw;
    height: 350px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 12;

    ${theme.bp.desktop} {
        height: ${(props) => (props.isEvil ? '600px' : '500px')};
    }
`;

const BeegBowser = styled.img`
    width: 170%;
    max-width: 700px;
    position: absolute;
    top: ${(props) => (props.isEvil ? '20px' : '280px')};
    margin-right: auto;
    margin-left: auto;
    transition: 500ms;

    ${theme.bp.desktop} {
        top: ${(props) => (props.isEvil ? '30px' : '550px')};
        width: 80%;
        max-width: 1200px;
        opacity: 0.5;
        z-index: 10;
    }
`;

const BrightBeegBowser = styled.img`
    z-index: 5;
    width: 150%;
    max-width: 700px;
    position: absolute;
    top: 110px;
    margin-right: auto;
    margin-left: auto;
    opacity: ${(props) => (props.isEvil ? 1 : 0)};
    transition: 500ms;

    ${theme.bp.desktop} {
        top: 170px;
        width: 80%;
        max-width: 1200px;
        z-index: 11;
    }
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

            if (refScrollDecimal > -0.05 && refScrollDecimal < 1) {
                setScrollBg(1 - refScrollDecimal);
                sessionScrollBgState(scrollBg);
                setScrollDecimal(refScrollDecimal);
            }

            if (refScrollDecimal > 0.55 && !isEvil) {
                document.body.style.opacity = 0;
                document.body.style.overflowY = 'hidden';
                document.body.style.transition = 'opacity 800ms';
                document.body.style.backgroundColor = 'white';

                setTimeout(() => {
                    setEvil(true);
                    window.scrollTo({ top: 0, left: 0 });
                    document.body.style.overflowY = 'auto';
                    document.body.style.opacity = 1;
                }, 800);

                setTimeout(() => {
                    document.body.style.backgroundColor = 'black';
                }, 1600);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollBg, isEvil]);

    return (
        <>
            <Wrapper id="bowserSection" isEvil={isEvil} ref={WrapperRef} scrollBg={scrollBg}>
                {!isEvil &&
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
                }

                <Fade isEvil={isEvil} />
                <BeegBowser isEvil={isEvil} src={darkBowserImg} alt="Mega Bowser" />
                <BrightBeegBowser isEvil={isEvil} src={brightBowserImg} alt="Mega Bowser" />
            </Wrapper>
        </>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
