import styled from 'styled-components';
import EventInfo from '../EventInfo';
import Text from '../Text';
import ShapeDivider from '../../icons/ShapeDivider';
import marioImg from '../../images/about-cats.webp';
import toadImg from '../../images/about-toad.webp';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

const ShapeWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    transform: rotate(180deg);
    z-index: 2;
`;

const EventInfoWrapper = styled.div`
    padding: 64px;
    padding-bottom: 0;
    max-width: 1600px;
    margin: auto;
`;

const Strong = styled.strong`
    font-weight: 800;
    font-size: 46px;
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Image = styled.img`
    max-width: 500px;
    max-height: 460px;
    align-self: flex-end;
    margin-right: -64px;
    z-index: 1;
    filter: drop-shadow(3px 0px 3px rgba(0, 0, 0, 0.2));

    &:first-of-type {
        z-index: 3;
        margin-right: -50px;
    }
`;

const GameInfo = () => {
    return (
        <Wrapper>
            <ShapeWrapper>
                <ShapeDivider />
            </ShapeWrapper>
            <EventInfoWrapper>
                <Text align="center" size="38px" transform="uppercase">
                    New <Strong>Super Mario 3D</Strong> World
                </Text>
                <EventInfo />
                <Text
                    m="80px 0 24px"
                    lineHeight="1em"
                    size="60px"
                    weight="800"
                    color="#ffb3b3"
                    maxWidth="890px"
                >
                    Team up for a paws-itively adorable adventure!
                </Text>

                <ImageWrapper>
                    <Text
                        weight="500"
                        size="24px"
                        maxWidth="480px"
                        lineHeight="1.4em"
                    >
                        Bowser is up to his old tricks again and only Mario and
                        his friends can save the day! Use power-ups like the
                        Super Bell, which grants catlike abilities like climbing
                        and scratching, to overcome Bowser and his minions.
                    </Text>
                    <Image
                        src={marioImg}
                        alt="Mario and friends in cat suits"
                    />
                    <Image src={toadImg} alt="Captain Toad waving" />
                </ImageWrapper>
            </EventInfoWrapper>
        </Wrapper>
    );
};

export default GameInfo;
