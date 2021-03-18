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

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    background-color: red;
`;

const ShapeWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    transform: rotate(180deg);
`;

const EventGalleryWrapper = styled.div`
    /* background-color: tomato; */
    padding: 64px;
    padding-bottom: 0;
    max-width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
`;

const TitleWrapper = styled.div`
    /* background-color: tomato; */
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 60px;
`;

const FirstGroup = styled.div`
    /* background-color: lime; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 100px;

    & > p {
        /* background-color: tomato; */
        align-self: flex-end;
        position: sticky;
        top: 120px;
        margin-top: -200px;
        margin-bottom: 460px;
    }
`;

const FlyingImg = styled.img`
    /* background-color: green; */
    max-width: 50%;
    margin-left: -110px;
    position: sticky;
    top: 340px;
    filter: drop-shadow(3px 0px 3px rgba(0, 0, 0, 0.2));
`;

const FairyStoryImg = styled.img`
    /* background-color: hotpink; */
    align-self: flex-end;
    max-width: 50%;
    margin-right: 30px;
`;

const SecondGroup = styled.div`
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
`;

const BowserImg = styled.img`
    /* background-color: purple; */
    align-self: flex-end;
    width: 660px;
    margin-right: -290px;
    position: sticky;
    top: 40px;
    margin-bottom: 800px;
    z-index: 1;
`;

const GlassImg = styled.img`
    /* background-color: green; */
    align-self: flex-end;
    width: 82px;
    margin-right: 267px;
    margin-top: -994px;
    position: sticky;
    top: 361px;
    z-index: 1;
`;

const CastleImg = styled.img`
    width: 100%;
    max-width: 930px;
    margin-left: 60px;
    margin-bottom: 400px;
    border-radius: 10px;
    position: sticky;
    top: 50px;
`;

const SmallImageWrapper = styled.div`
    /* background-color: brown; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    margin-top: 300px;
    margin-bottom: 140px;
    top: 520px;
    position: sticky;
`;

const SmallImg = styled.img`
    /* background-color: lime; */
    margin-left: -110px;
    border-radius: 10px;
    box-shadow: 2px -50px 200px black;
    &:last-of-type {
        margin-left: 20px;
    }
`;

const HiddenStickyStop = styled.div`
    /* background-color: lime; */
    height: 200px;
    width: 200px;
`;

const GameGallery = () => {
    return (
        <Wrapper>
            <ShapeWrapper>
                <ShapeDivider color="white" />
            </ShapeWrapper>

            <EventGalleryWrapper>
                <TitleWrapper>
                    <Text
                        m="32px 0 24px"
                        lineHeight="1em"
                        size="60px"
                        weight="800"
                        color="white"
                        maxWidth="890px"
                        align="right"
                    >
                        Get a sneak peek of the new action-packed game!
                    </Text>
                </TitleWrapper>
                <FirstGroup>
                    <FlyingImg src={flyingImg} alt="Mario and friends flying on water dino" />
                    <Text m="0 80px" color="white" weight="500" size="24px" maxWidth="500px" lineHeight="1.4em">
                        Bowser is up to his old tricks again and only Mario and his friends can save the day! Use
                        power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to
                        overcome Bowser and his minions.
                    </Text>

                    <FairyStoryImg src={fairyStoryImg} alt="Distressed fairy" />
                </FirstGroup>

                <SecondGroup>
                    <BowserImg src={bowserImg} alt="Menacing Bowser holding a fairy in a glass bottle" />
                    <GlassImg src={glassImg} alt="A trapped fairy in a small bottle" />
                    <CastleImg src={castleImg} alt="Bowsers castle" />
                    <SmallImageWrapper>
                        <SmallImg src={marioImg} alt="Mario brothers in cat suits" />
                        <SmallImg src={bigMarioImg} alt="beeg beeg mario" />
                    </SmallImageWrapper>
                    <HiddenStickyStop />
                </SecondGroup>
            </EventGalleryWrapper>
        </Wrapper>
    );
};

export default GameGallery;
