import styled from 'styled-components/macro';
import EventInfo from '../EventInfo';
import Text from '../Text';
import marioImg from '../../images/about-cats.webp';
import toadImg from '../../images/about-toad.webp';
import angryMarioImg from '../../images/bowser/mario-bowserjr.webp';
import bows from '../../images/bowser/bowser.webp';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    background-color: ${(props) => (props.isEvil ? 'black' : 'white')};
    border-top: ${(props) => (props.isEvil && '1px solid red')};
`;

const EventInfoWrapper = styled.div`
    padding: 44px 0;
    padding-bottom: 0;
    max-width: 1400px;
    margin: auto;

    ${theme.bp.desktop} {
        padding: 64px 64px 0;
        margin-bottom: -30px;
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
    flex-direction: ${(props) => props.isEvil ? 'column' : 'column-reverse'};
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
    max-width: 360px;
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

    ${(props) => props.isEvil && `
        &:first-of-type {
            position: absolute;
            bottom: -160px;
            width: 80%;
            max-height: unset;
        }

        &:last-of-type {
            transform: none;
            z-index: 0;
            width: 114vw;
            margin-top: -50px;
            margin-bottom: 20px;
            max-width: unset;
            max-height: unset;
        }
    `};

    ${theme.bp.desktop} {
        height: auto;
        max-width: 540px;
        max-height: 440px;
        margin-right: -84px;
        margin-bottom: 28px;
        z-index: 0;
        transform: none;

        &:first-of-type {
            margin-right: -50px;
            align-self: flex-end;
            margin-bottom: 0;
        }

        ${(props) => props.isEvil && `
            max-width: 1000px;
            max-height: unset;
            padding: 0;

            &:first-of-type {
                position: absolute;
                width: 38%;
                max-width: 500px;
                margin-bottom: -30px;
            }

            &:last-of-type {
                margin-right: -230px;
                margin-top: -200px;
                width: 80%;
            }
        `};
    }
`;

const Line = styled.hr`
    height: 1px;
    background-color: red;
    border: none;
    width: 100vw;
    margin-top: 40px;
    position: absolute;
    left: 0;
`;

const GameInfo = () => {
    const isEvil = useBowser();
    return (
        <Wrapper isEvil={isEvil}>
            <EventInfoWrapper>
                <Text
                    fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                    textAlign="center"
                    fontWeight={['600', '400']}
                    fontSize={['14px', '38px']}
                    transform="uppercase"
                    m={['0 0 30px', '0']}
                >
                    New <Strong>{isEvil ? 'Bowser´s fury' : 'Super Mario 3D'}</Strong> World
                </Text>

                <EventInfo />

                {isEvil && <Line />}

                <Text
                    fontFamily={isEvil ? 'NewRocker' : 'MontSerrat'}
                    m={isEvil ? ['70px 12px 12px', '110px 0 16px'] : ['40px 12px 12px', '50px 0 16px']}
                    lineHeight="1.1em"
                    fontSize={['38px', '60px']}
                    fontWeight="800"
                    maxWidth="890px"
                    color={isEvil ? 'white' : 'red'}
                >
                    {isEvil
                        ? 'It’s a real'
                        : 'Team up for a paws-itively adorable adventure!'}
                </Text>

                {isEvil &&
                    <Text
                        fontFamily="NewRocker"
                        m={['-20px 12px 24px', '-20px 0 24px']}
                        lineHeight="1.1em"
                        fontSize={['38px', '60px']}
                        fontWeight="800"
                        color={isEvil ? 'white' : 'red'}
                    >
                        cat-tastrophe!
                    </Text>
                }

                <ImageWrapper isEvil={isEvil}>
                    <Text
                        m={isEvil ? ['120px 12px 20px', '0'] : ['0 12px 92px', '0']}
                        fontWeight={isEvil ? '500' : '600'}
                        fontSize={['16px', '22px']}
                        maxWidth="500px"
                        lineHeight="1.4em"
                        color={isEvil ? 'white' : 'red'}
                    >
                        Bowser is up to his old tricks again and only Mario and
                        his friends can save the day! Use power-ups like the
                        Super Bell, which grants catlike abilities like climbing
                        and scratching, to overcome Bowser and his minions.
                    </Text>
                    <Image
                        isEvil={isEvil}
                        src={isEvil ? angryMarioImg : marioImg}
                        alt="Mario and friends in cat suits"
                    />
                    <Image
                        isEvil={isEvil}
                        src={isEvil ? bows : toadImg}
                        alt={isEvil ? "Big angry bowser" : "Captain Toad waving"}
                    />
                </ImageWrapper>
            </EventInfoWrapper>
        </Wrapper>
    );
};

export default GameInfo;
