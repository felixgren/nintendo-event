import styled from 'styled-components';
import EventInfo from '../EventInfo';
import Form from '../Form';
import Text from '../Text';

import MarioPoleImg from '../../images/form-mario.webp';
import nintendoImg from '../../images/sponsors-nintendo-logo.webp';
import esrbImg from '../../images/sponsors-esrb.webp';
import gamestopImg from '../../images/sponsors-gamestop.webp';
import swicthImg from '../../images/sponsors-switch.webp';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    color: #ff0000;
    position: relative;
`;
const EventInfoWrapper = styled.div`
    padding: 64px 16px;
`;

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;

    & > div {
        margin-right: 40px;
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SponsorsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1068px;
    padding: 64px 190px 32px 0;
`;

const SponsorLogo = styled.img`
    width: auto;
    height: auto;
    margin-left: 24px;
`;

const Image = styled.img`
    position: absolute;
    bottom: 0;
    right: 2%;
    width: 26%;
    max-width: 440px;
`;

const SignUp = () => {
    return (
        <Wrapper>
            <EventInfoWrapper>
                <EventInfo />
            </EventInfoWrapper>

            <FormWrapper>
                <Form />
                <Text
                    weight="800"
                    size="min(9.5vw, 150px)"
                    transform="uppercase"
                    color="#FFB3B3"
                    lineHeight="0.9em"
                    w="50%"
                    maxWidth="500px"
                >
                    It's game time!
                </Text>
                <Image src={MarioPoleImg} alt="Mario on flag" />
            </FormWrapper>
            <SponsorsWrapper>
                <Text
                    transform="uppercase"
                    size="min(4vw, 48px)"
                    weight="800"
                    color="#FFB3B3"
                >
                    Sponsorship
                </Text>
                <FlexWrapper>
                    <SponsorLogo src={gamestopImg} alt="Gamestop logo" />
                    <SponsorLogo src={nintendoImg} alt="Nintendo logo" />
                    <SponsorLogo src={swicthImg} alt="Switch console logo" />
                    <SponsorLogo src={esrbImg} alt="ESRB Privacy logo" />
                </FlexWrapper>
            </SponsorsWrapper>
            <Image src={MarioPoleImg} alt="Mario on flag" />
        </Wrapper>
    );
};

export default SignUp;
