import styled from 'styled-components';
import EventInfo from '../EventInfo';
import Text from '../Text';
// import ShapeDivider from '../../icons/ShapeDivider';
import marioImg from '../../images/about-cats.webp';
import toadImg from '../../images/about-toad.webp';
import theme from '../../utils/theme';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

// const ShapeWrapper = styled.div`
//     position: absolute;
//     left: 0;
//     width: 100%;
//     bottom: 0;
//     transform: rotate(180deg);
//     z-index: 2;
// `;

const EventInfoWrapper = styled.div`
    padding: 44px 0;
    padding-bottom: 0;
    max-width: 1600px;
    margin: auto;

    ${theme.bp.desktop} {
        padding: 64px;
    }
`;

const Strong = styled.strong`
    font-weight: 800;
    font-size: 24px;

    ${theme.bp.desktop} {
        font-size: 46px;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column-reverse;
    overflow: hidden;
    margin-top: -130px;

    ${theme.bp.desktop} {
        flex-direction: row;
        margin-top: 0;
        overflow: unset;
    }
`;

const Image = styled.img`
    filter: drop-shadow(3px 0px 3px rgba(0, 0, 0, 0.2));
    z-index: 1;
    max-width: 330px;
    max-height: 290px;
    align-self: flex-end;
    margin-right: -68px;
    transform: rotate(-9deg);

    &:first-of-type {
        z-index: 3;
        margin-right: 0px;
        margin-top: -160px;
        align-self: flex-start;
        padding: 12px;
        transform: none;
    }

    ${theme.bp.desktop} {
        max-width: 500px;
        max-height: 460px;
        margin-right: -64px;
        transform: none;

        &:first-of-type {
            margin-right: -50px;
            align-self: flex-end;
        }
    }
`;

const GameInfo = () => {
    return (
        <Wrapper>
            {/* <ShapeWrapper>
                <ShapeDivider />
            </ShapeWrapper> */}
            <EventInfoWrapper>
                <Text
                    textAlign="center"
                    fontWeight={['600', '400']}
                    fontSize={['14px', '38px']}
                    transform="uppercase"
                    m={['0 0 30px', '0']}
                >
                    New <Strong>Super Mario 3D</Strong> World
                </Text>
                <EventInfo />
                <Text
                    m={['40px 12px 6px', '80px 0 24px']}
                    lineHeight="1.1em"
                    fontSize={['38px', '60px']}
                    fontWeight="800"
                    color="#ffb3b3"
                    maxWidth="890px"
                >
                    Team up for a paws-itively adorable adventure!
                </Text>

                <ImageWrapper>
                    <Text
                        m={['8px 12px 40px', '0']}
                        fontWeight="500"
                        fontSize={['16px', '24px']}
                        maxWidth="480px"
                        lineHeight="1.4em"
                    >
                        Bowser is up to his old tricks again and only Mario and his friends can save the day! Use
                        power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to
                        overcome Bowser and his minions.
                    </Text>
                    <Image src={marioImg} alt="Mario and friends in cat suits" />
                    <Image src={toadImg} alt="Captain Toad waving" />
                </ImageWrapper>
            </EventInfoWrapper>
        </Wrapper>
    );
};

export default GameInfo;
