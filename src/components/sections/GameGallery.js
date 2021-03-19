import React, { useState, useRef, useEffect } from 'react';
import { useBowser } from './BowserContext';
import styled from 'styled-components';
import Text from '../Text';
import ShapeDivider from '../../icons/ShapeDivider';
import flyingImg from '../../images/gallery-flying.webp';
import fairyStoryImg from '../../images/gallery-map.webp';
import castleImg from '../../images/gallery-castle.webp';
import bowserImg from '../../images/gallery-bowser.webp';
import glassImg from '../../images/gallery-glass.webp';
import bigMarioImg from '../../images/gallery-big-mario.webp';
import marioImg from '../../images/gallery-mario.webp';
import tubeImg from '../../images/gallery-pipe.webp';
import theme from '../../utils/theme';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    /* Refactor into variable */
    background-color: ${(props) =>
        `rgb(${70 - props.scrollBg}, ${147 - props.scrollBg}, ${
            223 - props.scrollBg
        })`};
    ${theme.bp.desktop} {
        margin-top: 0;
    }
`;

const ShapeTop = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: -84px;
    background-color: white;
    transform: rotate(180deg);

    ${theme.bp.desktop} {
        background-color: transparent;
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
        right: 290px;
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
        right: 290px;
        height: 300px;
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
            margin-top: -380px;
            margin-bottom: 460px;
            top: 140px;
        }
    }
`;

const FlyingImg = styled.img`
    max-width: 90%;
    margin-left: -30px;
    margin-bottom: 400px;
    position: sticky;
    top: 30px;
    filter: drop-shadow(3px 0px 3px rgba(0, 0, 0, 0.2));

    ${theme.bp.desktop} {
        width: 50%;
        z-index: 1;
        margin-bottom: 40px;
        top: calc(50vh - 200px);
        max-width: 630px;
        margin-left: -110px;
    }
`;

const FairyStoryImg = styled.img`
    align-self: flex-end;
    max-width: 300px;
    margin-right: 12px;
    margin-top: -290px;
    border-radius: 10px;
    filter: drop-shadow(2px 0px 3px rgba(0, 0, 0, 0.2));

    ${theme.bp.desktop} {
        margin-top: -160px;
        max-width: 600px;
        margin-right: 82px;
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
    top: 340px;
    align-self: flex-end;
    width: 160px;
    height: 234px;
    object-fit: cover;
    object-position: 0;
    overflow: hidden;
    margin-bottom: 80px;
    z-index: 1;
    filter: drop-shadow(-10px -10px 2px rgba(0, 0, 0, 0.2));

    ${theme.bp.desktop} {
        top: 40px;
        width: 660px;
        height: auto;
        margin-right: -290px;
        margin-bottom: 110px;
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
        margin-right: 268px;
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
    margin-top: -100px;
    position: sticky;
    top: 50px;

    ${theme.bp.desktop} {
        width: 100%;
        height: auto;
        margin-left: 0;
        max-width: 80%;
        margin-bottom: 300px;
        margin-top: -220px;
    }
`;

const SmallImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: -270px;
    margin-bottom: 140px;
    top: 250px;
    position: sticky;

    ${theme.bp.desktop} {
        align-items: center;
        flex-direction: row;
        margin-top: 100px;
        margin-bottom: 140px;
        top: 480px;
    }
`;

const SmallImg = styled.img`
    width: 50%;
    margin-left: 30px;
    border-radius: 10px;
    box-shadow: 2px -20px 60px black;
    max-width: 100%;
    &:last-of-type {
        margin-left: 10px;
        margin-top: -14px;
    }

    ${theme.bp.desktop} {
        width: 60%;
        max-width: 1000px;
        margin-left: -50px;
        border-radius: 10px;
        box-shadow: 2px -50px 200px black;
        &:last-of-type {
            margin-left: 20px;
        }
    }
`;

const HiddenStickyStop = styled.div`
    height: 200px;
    width: 200px;
`;

// I need to be refactored!
const GameGallery = () => {
    const WrapperRef = useRef(null);
    const isEvil = useBowser();
    const [scrollBg, setScrollBg] = useState('0');
    const [refScrollDecimal, setScrollDecimal] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const offsetTop = WrapperRef.current.offsetTop;
            const refScrollY = window.scrollY - offsetTop;
            const refHeight = WrapperRef.current.scrollHeight;
            const viewHeight = window.innerHeight;

            const refScrollDecimal = refScrollY / (refHeight - viewHeight);

            if (refScrollDecimal > 0 && refScrollDecimal < 1.5) {
                setScrollDecimal(refScrollDecimal);
                setScrollBg(isEvil ? 1000 : refScrollDecimal * 500);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isEvil]);

    return (
        <Wrapper ref={WrapperRef} scrollBg={scrollBg}>
            <ShapeTop>
                <ShapeDivider
                    color={`rgba(${70 - scrollBg}, ${147 - scrollBg}, ${
                        223 - scrollBg
                    }, 1)`}
                />
            </ShapeTop>
            <ShapeBottom>
                <ShapeDivider color="white" />
            </ShapeBottom>
            <EventGalleryWrapper>
                <TubeImageBlur src={tubeImg} alt="tube" />
                <TubeImage src={tubeImg} alt="tube" />

                <TitleWrapper>
                    <Text
                        m={['0 12px 8px', '30px 64px 0']}
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
                <FirstGroup>
                    <FlyingImg
                        src={flyingImg}
                        alt="Mario and friends flying on water dino"
                    />
                    <Text
                        m={['0px 12px', '0 80px']}
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

                    <FairyStoryImg src={fairyStoryImg} alt="Distressed fairy" />
                </FirstGroup>

                <SecondGroup>
                    <BowserImg
                        src={bowserImg}
                        alt="Menacing Bowser holding a fairy in a glass bottle"
                    />
                    <GlassImg
                        src={glassImg}
                        alt="A trapped fairy in a small bottle"
                    />
                    <CastleImg src={castleImg} alt="Bowsers castle" />
                    <SmallImageWrapper>
                        <SmallImg
                            src={marioImg}
                            alt="Mario brothers in cat suits"
                        />
                        <SmallImg src={bigMarioImg} alt="beeg beeg mario" />
                    </SmallImageWrapper>
                    <HiddenStickyStop />
                </SecondGroup>
            </EventGalleryWrapper>
        </Wrapper>
    );
};

export default GameGallery;
