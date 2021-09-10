import React, { useState, useRef, useEffect } from 'react';
import { useBowser, useBowserUpdate } from './BowserContext';
import styled from 'styled-components/macro';
import Text from '../Text';
import ShapeDivider from '../../icons/ShapeDivider';
import theme from '../../utils/theme';

import flyingImg from '../../images/gallery-flying.webp';
import fairyStoryImg from '../../images/gallery-fairy.png';
import castleImg from '../../images/gallery-castle.png';
import bowserImg from '../../images/gallery-bowser.webp';
import glassImg from '../../images/gallery-glass.webp';
import bigMarioImg from '../../images/gallery-big-mario.png';
import marioImg from '../../images/gallery-mario.webp';
import tubeImg from '../../images/gallery-pipe.webp';
import worldImg from '../../images/bowser/world.png';
import angryCatsImg from '../../images/bowser/angry-cats.png';
import furiousBowserImg from '../../images/bowser/furious-bowser.png';
import furiousCatMarioImg from '../../images/bowser/furious-cat-mario.png';
import marioCatFriendsImg from '../../images/bowser/mario-cat-friends.png';
import bellImg from '../../images/bowser/bell.png';

const Wrapper = styled.div.attrs(props => ({
    style: {
      backgroundColor: `rgb(${255 - props.scrollBg}, 0, 0)`,
    },
  }))`
    width: 100%;
    position: relative;
    ${theme.bp.desktop} {
        margin-top: 0;
    }
`;

const ShapeTop = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: -84px;
    background-color: transparent;
    transform: rotate(180deg);

    ${theme.bp.desktop} {
        height: auto;
    }
`;

const ShapeBottom = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -4px;
    transform: rotate(180deg);
    z-index: 10;
`;

const EventGalleryWrapper = styled.div`
    padding: 24px 0;
    padding-bottom: 0;
    max-width: 1500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    position: relative;

    ${theme.bp.desktop} {
        padding: 64px;
    }
`;

const TubeImageBlur = styled.img`
    position: absolute;
    bottom: 10px;
    right: 94px;
    object-fit: cover;
    object-position: 0% 0%;
    height: 130px;
    opacity: 0.4;
    z-index: 4;

    ${theme.bp.desktop} {
        right: 226px;
        height: 300px;
    }
`;

const TubeImage = styled.img`
    position: absolute;
    bottom: 10px;
    right: 94px;
    object-fit: cover;
    object-position: 0% 0%;
    height: 130px;
    z-index: 2;

    ${theme.bp.desktop} {
        right: 226px;
        height: 300px;
        filter: drop-shadow(-3px -3px 40px rgba(0, 0, 0, 1));
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const FirstGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 100px;

    & > p {
        align-self: flex-end;
        position: sticky;
        top: 340px;
        margin-top: -260px;
        margin-bottom: 320px;
    }

    ${theme.bp.desktop} {
        & > p {
            margin-top: ${(props) => (props.isEvil ? '-400px' : '-260px')};
            margin-bottom: ${(props) => (props.isEvil ? '480px' : '460px')};
            top: 120px;
        }
    }
`;

const FlyingImg = styled.img`
    max-width: 90%;
    margin-left: ${(props) => (props.isEvil ? '12px' : '-30px')};
    margin-bottom: 400px;
    position: sticky;
    top: 30px;
    filter: drop-shadow(3px 0px 3px rgba(0, 0, 0, 0.2));

    ${theme.bp.desktop} {
        width: 50%;
        z-index: 1;
        top: calc(50vh - 100px);

        ${(props) => (props.isEvil ? `
            margin-bottom: 160px;
            max-width: 40vw;
            margin-left: -20px;
        ` : `
            margin-bottom: 0;
            max-width: 630px;
            margin-left: -110px;
        `)};
    }
`;

const StoryImg = styled.img`
    align-self: flex-end;
    max-width: 300px;
    margin-right: 12px;
    margin-top: -290px;
    border-radius: 10px;
    filter: drop-shadow(2px 0px 3px rgba(0, 0, 0, 0.2));

    ${theme.bp.desktop} {
        margin-top: -200px;
        max-width: 600px;
        margin-right: 30px;
        margin-bottom: 20px;
    }
`;

const SecondGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

const BowserImg = styled.img`
    position: sticky;
    align-self: flex-end;
    height: 234px;
    object-fit: cover;
    object-position: 0;
    overflow: hidden;
    filter: drop-shadow(-2px -2px 2px rgba(0, 0, 0, 0.1));

    ${(props) => (props.isEvil ? `
        top: 66vh;
        width: 210px; 
        margin-bottom: 10px; 
        z-index: 10;
    ` : `
        top: 340px;
        width: 160px; 
        margin-bottom: 80px; 
        z-index: 1;
    `)};


    ${theme.bp.desktop} {
        height: auto;

        ${(props) => (props.isEvil ? `
            top: 35vh;
            width: 460px;
            margin-right: -50px;
            margin-bottom: -64px;
            z-index: 10;
        ` : `
            top: 40px;
            width: 660px;
            margin-right: -350px;
            margin-bottom: 110px;
        `)};
    }
`;

const GlassImg = styled.img`
    align-self: flex-end;
    width: 41px;
    margin-right: 112px;
    margin-top: -168px;
    margin-bottom: -20px;
    position: sticky;
    top: 486px;
    z-index: 3;

    ${theme.bp.desktop} {
        width: 81px;
        margin-right: 208px;
        margin-top: -304px;
        margin-bottom: -130px;
        top: 363px;
    }
`;

const CastleImg = styled.img`
    width: 87%;
    height: 240px;
    object-fit: cover;
    margin-left: 12px;
    margin-bottom: 440px;
    border-radius: 10px;
    margin-top: ${(props) => (props.isEvil ? '-250px' : '-100px')};
    position: sticky;
    top: 50px;

    ${theme.bp.desktop} {
        width: 100%;
        height: auto;
        margin-left: 0;
        max-width: 80%;
        margin-bottom: 300px;
        margin-top: ${(props) => (props.isEvil ? '-200px' : '50px')};
    }
`;

const SmallImageWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.isEvil ? 'column-reverse' : 'column')};
    margin-bottom: ${(props) => (props.isEvil ? '40px' : '140px')};
    align-items: flex-start;
    justify-content: center;
    margin-top: -270px;
    top: 250px;
    position: sticky;

    ${theme.bp.desktop} {
        align-items: center;
        flex-direction: row;
        margin-top: 60px;
        margin-bottom: 80px;
        top: 550px;
        width: 70%;
    }
`;

const SmallImg = styled.img`
    width: 50%;
    margin-left: 30px;
    border-radius: 10px;
    box-shadow: 2px -20px 60px black;
    max-width: 100%;
    
    &:first-of-type {
        ${(props) => (props.isEvil && `
            box-shadow: none;
            margin-left: -30px;
            width: 70%;
        `)};
    }
    &:last-of-type {
        margin-left: ${(props) => (props.isEvil ? '50px' : '10px')};
        margin-top: -14px;
        margin-bottom: ${(props) => (props.isEvil && '20px')};
        width: ${(props) => (props.isEvil && '82%')};
    }

    ${theme.bp.desktop} {
        width: 70%;
        max-width: 1000px;
        margin-left: -30px;
        border-radius: 10px;
        box-shadow: ${(props) => (props.isEvil ? 'none' : '2px -50px 200px black')};

        &:first-of-type {
            ${(props) => (props.isEvil && `
                width: 660px;
                margin-left: -110px;
                margin-bottom: -120px;
                margin-top: 180px;
                margin-right: -130px;
            `)};
        }

        &:last-of-type {
            margin-left: 20px;
            box-shadow: 2px -50px 200px black;
            width: 70%;
        }
    }

    ${(props) => props.isReturnMario && `
        transition: 0.2s;
        cursor: pointer;
        animation: Bell-Calling infinite 3s linear;
        
        &:hover {
            animation: Bell-Calling 3s linear;
            filter: grayscale(0%);
        }

        @keyframes Bell-Calling {
            0% {
                transform: scale(1);
                filter: grayscale(80%);
            }
            10% {
                transform: scale(1.05);
                filter: grayscale(0%);
            }
            20% {
                transform: scale(1);
                filter: grayscale(60%);
            }
            100% {
                transform: scale(1);
                filter: grayscale(80%);
            }
        }
    `};
`;

const HiddenStickyStop = styled.div`
    height: 200px;
    width: 200px;
`;

// I need to be refactored!
const GameGallery = () => {
    const WrapperRef = useRef(null);
    const isEvil = useBowser();
    const setEvil = useBowserUpdate();
    const bowserSection = document.querySelector('#bowserSection');

    const [scrollBg, setScrollBg] = useState('0');
    // eslint-disable-next-line
    const [refScrollDecimal, setScrollDecimal] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const offsetTop = WrapperRef.current.offsetTop;
            const refScrollY = window.scrollY - offsetTop;
            const refHeight = WrapperRef.current.scrollHeight;
            const viewHeight = window.innerHeight;

            const refScrollDecimal = refScrollY / (refHeight - viewHeight);

            if (refScrollDecimal > -0.5 && refScrollDecimal < 1.5) {
                setScrollDecimal(refScrollDecimal);
                // setScrollBg(isEvil ? 1000 : refScrollDecimal * 500);
                setScrollBg(refScrollDecimal * 500);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isEvil]);


    const returnMarioMode = () => {
        document.body.style.opacity = 0;
        document.body.style.overflowY = 'hidden';
        document.body.style.transition = 'opacity 800ms';
        document.body.style.backgroundColor = 'red';

        setTimeout(() => {
            setEvil(false);
            window.scrollTo({ top: 0, left: 0 });
            document.body.style.overflowY = 'auto';
            document.body.style.opacity = 1;
            bowserSection.style.display = 'none';
        }, 800);

        setTimeout(() => {
            document.body.style.backgroundColor = 'black';
        }, 1600);
    }

    return (
        <Wrapper ref={WrapperRef} scrollBg={scrollBg}>
            <ShapeTop>
                <ShapeDivider color={`rgb(${255 - scrollBg}, 0, 0)`} />
            </ShapeTop>
            <ShapeBottom>
                <ShapeDivider color="white" />
            </ShapeBottom>
            <EventGalleryWrapper>

                {!isEvil && <>
                    <TubeImageBlur src={tubeImg} alt="tube" />
                    <TubeImage src={tubeImg} alt="tube" />
                </>}

                <TitleWrapper>
                    <Text
                        fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                        m={isEvil ? ['140px 12px 24px', '80px 64px 48px'] : ['0 12px 8px', '30px 64px 48px']}
                        lineHeight="1em"
                        fontSize={['38px', '60px']}
                        fontWeight="800"
                        color="white"
                        maxWidth="890px"
                        textAlign={['left', 'right']}
                    >
                        Get a sneak peek of the new action-packed game!
                    </Text>
                </TitleWrapper>
                <FirstGroup isEvil={isEvil}>
                    <FlyingImg
                        isEvil={isEvil}
                        src={isEvil ? marioCatFriendsImg : flyingImg}
                        alt="Mario and friends"
                    />
                    
                    <Text
                        m={['0px 12px', '0 30px']}
                        color="white"
                        fontWeight="500"
                        fontSize={['16px', '24px']}
                        maxWidth="600px"
                        lineHeight="1.4em"
                    >
                        Bowser is up to his old tricks again and only Mario and
                        his friends can save the day! Use power-ups like the
                        Super Bell, which grants catlike abilities like climbing
                        and scratching, to overcome Bowser and his minions.
                    </Text>

                    <StoryImg src={isEvil ? worldImg : fairyStoryImg} alt="Distressed fairy" />
                </FirstGroup>

                <SecondGroup>
                    <BowserImg
                        isEvil={isEvil}
                        src={isEvil ? furiousCatMarioImg : bowserImg}
                        alt="Menacing Bowser holding a fairy in a glass bottle"
                    />
                    {!isEvil && 
                        <GlassImg
                            src={glassImg}
                            alt="A trapped fairy in a small bottle"
                        />
                    }

                    <CastleImg isEvil={isEvil} src={isEvil ? furiousBowserImg : castleImg} alt="Furious bowser" />

                    <SmallImageWrapper isEvil={isEvil}>
                        <SmallImg
                            isEvil={isEvil}
                            isReturnMario={isEvil}
                            src={isEvil ? bellImg : marioImg}
                            alt="Mario brothers in cat suits"
                            onClick={() => isEvil && returnMarioMode()}
                        />

                        <SmallImg isEvil={isEvil} src={isEvil ? angryCatsImg : bigMarioImg} alt="beeg beeg mario" />

                    </SmallImageWrapper>
                    <HiddenStickyStop />
                </SecondGroup>
            </EventGalleryWrapper>
        </Wrapper>
    );
};

export default GameGallery;
