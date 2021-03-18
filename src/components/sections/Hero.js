import styled from 'styled-components';
import heroBackground from '../../images/hero-background.webp';
import evilHeroBackground from '../../images/bowser/hero-evilbackground.webp';
import heroLogo from '../../images/hero-logo.webp';
import Button from '../Button';
import EventTitle from '../EventTitle';
import Text from '../Text';
import bowserState from '../../utils/bowserState';
import theme from '../../utils/theme';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: ${(props) => `${props.bowser ? '#000000' : '#ff0000'}`};
    text-align: center;

    ${theme.bp.desktop} {
        height: 1024px;
    }
`;

const Icons = styled.div`
    width: 100%;
    height: 100%;
    /* background: no-repeat url(${heroBackground}); */
    background: ${(props) => `no-repeat url(${props.bowser ? evilHeroBackground : heroBackground})`};
    background-position: top;
`;

const Logo = styled.div`
    width: 100%;
    height: 55%;
    background: no-repeat url(${heroLogo});
    background-position: 50% 50%;
    background-size: 90% auto;

    ${theme.bp.desktop} {
        background-position: 50% 80%;
        background-size: 600px auto;
    }
`;

const InfoWrapper = styled.div`
    width: auto;
    max-width: 700px;
    padding: 0 24px;
    margin: auto;

    ${(props) =>
        props.bowser
            ? `
            background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 52.08%, rgba(0, 0, 0, 0) 100%);
            `
            : `
            background: linear-gradient(270deg, rgba(255, 0, 0, 0) 0%, #ff0000 52.08%, rgba(255, 0, 0, 0) 100%);
    `};

    /* background: linear-gradient(270deg, rgba(255, 0, 0, 0) 0%, #ff0000 52.08%, rgba(255, 0, 0, 0) 100%); */
    /* background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 52.08%, rgba(0, 0, 0, 0) 100%); */
`;

const StyledText = styled(Text)`
    &::first-letter {
        text-transform: capitalize;
    }
`;

const ButtonWrapper = styled.div``;

const InviteText = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const country = params.get('country');

    return (
        <StyledText color="white" fontSize={['16px', '24px']} textAlign="center" fontFamily="Montserrat-Italic">
            {name && `${name}!`} You are invited to travel {country ? `from ${country} to 🇯🇵 to` : 'to 🇯🇵 and'}{' '}
            participate in...
            {/* You are invited to travel to Japan and participate in... */}
            {/* You are invited to travel from Sweden to Japan to participate in... */}
            {/* Kanye! You are invited to travel from Sweden to Japan to participate in... */}
        </StyledText>
    );
};

const Hero = ({ setPopupState }) => {
    return (
        <Wrapper bowser={bowserState()}>
            <Icons bowser={bowserState()}>
                <Logo />
                <InfoWrapper bowser={bowserState()}>
                    <InviteText />
                    <EventTitle color="white" textAlign="center" m="6px 0 20px" fontSize="24px" />
                    <ButtonWrapper onClick={() => setPopupState(true)}>
                        <Button isHero isBlue />
                    </ButtonWrapper>
                </InfoWrapper>
            </Icons>
        </Wrapper>
    );
};

export default Hero;
