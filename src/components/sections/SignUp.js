import styled from 'styled-components/macro';
import EventInfo from '../EventInfo';
import Form from '../Form';
import Text from '../Text';

import marioPoleImg from '../../images/form-mario.webp';
import evilPoleImg from '../../images/bowser/mario-evil-pole.png';
import nintendoImg from '../../images/sponsors-nintendo-logo.webp';
import esrbImg from '../../images/sponsors-esrb.webp';
import gamestopImg from '../../images/sponsors-gamestop.webp';
import swicthImg from '../../images/sponsors-switch.webp';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const FullWrapper = styled.div`
    background-color: white;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    z-index: 4;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    background-color: white;
    color: #ff0000;
    position: relative;
    overflow: hidden;

    ${theme.bp.desktop} {
        flex-direction: column;
        overflow: auto;
    }
`;
const EventInfoWrapper = styled.div`
    padding: 20px 0 12px;
    
    & > div > div > p {
        color: ${(props) => (props.isEvil && 'black')};
    }

    ${theme.bp.desktop} {
        padding: 40px 16px;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    padding: 12px 12px 0 14px;

    ${theme.bp.desktop} {
        flex-direction: row;

        & > div {
            margin-right: 40px;
        }
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    ${theme.bp.desktop} {
        max-width: unset;
    }
`;

const SponsorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 80px 12px 80px;

    ${theme.bp.desktop} {
        padding: 72px 190px 64px 0;
        max-width: 1068px;
    }
`;

const SponsorLogo = styled.img`
    width: auto;
    height: auto;
    max-width: 90px;
    max-height: 50px;
    padding-right: 12px;
    margin-bottom: -60px;

    ${theme.bp.desktop} {
        width: auto;
        height: auto;

        max-width: unset;
        max-height: unset;
        margin-left: 12px;
        margin-right: 12px;
        margin-bottom: 0;
        padding: 0;
    }
`;

const Image = styled.img`
    position: absolute;
    bottom: 0;
    right: -70px;
    width: 250px;
    filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.05));

    ${theme.bp.desktop} {
        right: 2%;
        width: 26%;
        max-width: 440px;
    }
`;

const SignUp = () => {
    const isEvil = useBowser();
    return (
        <FullWrapper>
            <Wrapper>
                <EventInfoWrapper isEvil={isEvil}>
                    <EventInfo color={isEvil && 'blue'} />
                </EventInfoWrapper>

                <FormWrapper>
                    <Form />
                    <Text
                        fontWeight="800"
                        fontSize={['80px', 'min(9.5vw, 150px)']}
                        transform="uppercase"
                        color="#FFB3B3"
                        lineHeight={isEvil ? '1em' : '0.9em'}
                        width="100%"
                        maxWidth="500px"
                        userSelect="none"
                        fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                    >
                        It’s game time!
                    </Text>
                    <Image src={isEvil ? evilPoleImg : marioPoleImg} alt="Mario on flag" />
                </FormWrapper>
                <SponsorsWrapper>
                    <Text
                        transform="uppercase"
                        fontSize={['24px', 'min(3.6vw, 48px)']}
                        fontWeight="800"
                        color="#FFB3B3"
                        userSelect="none"
                        fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                    >
                        Sponsorship
                    </Text>
                    <FlexWrapper>
                        <SponsorLogo src={gamestopImg} alt="Gamestop logo" />
                        <SponsorLogo src={swicthImg} alt="Switch console logo" />
                        <SponsorLogo src={nintendoImg} alt="Nintendo logo" />
                        <SponsorLogo src={esrbImg} alt="ESRB Privacy logo" />
                    </FlexWrapper>
                </SponsorsWrapper>
                <Image src={isEvil ? evilPoleImg : marioPoleImg} alt="Mario on flag" />
            </Wrapper>
        </FullWrapper>
    );
};

export default SignUp;
