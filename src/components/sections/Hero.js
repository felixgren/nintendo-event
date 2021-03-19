import styled from 'styled-components';
import heroBackground from '../../images/hero-background.webp';
import evilHeroBackground from '../../images/bowser/hero-evilbackground.webp';
import heroLogo from '../../images/hero-logo.webp';
import evilLogo from '../../images/bowser/bowser-logo.webp';
import Button from '../Button';
import EventTitle from '../EventTitle';
import Text from '../Text';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 667px;
    background: ${(props) => `${props.isEvil ? '#000000' : '#ff0000'}`};
    text-align: center;

    ${theme.bp.desktop} {
        height: 1024px;
        max-height: unset;
    }
`;

const Icons = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) =>
        `url(${props.isEvil ? evilHeroBackground : heroBackground})`};
    background-position: top;
    background-position: 50% 110%;
    background-size: 190% auto;

    ${theme.bp.desktop} {
        background-position: 50% 50%;
        background-size: unset;
    }
`;

const Logo = styled.div`
    width: 100%;
    height: 342px;
    background: ${(props) =>
        `no-repeat url(${props.isEvil ? evilLogo : heroLogo})`};
    background-position: 50% 100%;
    background-size: 84% auto;

    ${theme.bp.desktop} {
        height: 540px;
        background-size: 600px auto;
    }
`;

const InfoWrapper = styled.div`
    width: auto;
    max-width: 700px;
    padding: 14px 24px 0;
    margin: auto;
    height: 130px;

    ${(props) =>
        props.isEvil
            ? `
            background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 52.08%, rgba(0, 0, 0, 0) 100%);
            `
            : `
            background: linear-gradient(270deg, rgba(255, 0, 0, 0) 0%, #ff0000 52.08%, rgba(255, 0, 0, 0) 100%);
    `};

    ${theme.bp.desktop} {
        padding: 20px 24px;
    }
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
        <StyledText
            color="white"
            fontSize={['16px', '24px']}
            textAlign="center"
            fontFamily="Montserrat-Italic"
        >
            {name && `${name}!`} You are invited to travel{' '}
            {country ? `from ${country} to 🇯🇵 to` : 'to 🇯🇵 and'} participate
            in...
        </StyledText>
    );
};

const Hero = ({ setPopupState }) => {
    const isEvil = useBowser();
    return (
        <Wrapper isEvil={isEvil}>
            <Icons isEvil={isEvil}>
                <Logo isEvil={isEvil} />
                <InfoWrapper isEvil={isEvil}>
                    <InviteText />
                    <EventTitle
                        fontFamily={isEvil ? 'NewRocker' : 'Montserrat-Italic'}
                        color="white"
                        textAlign="center"
                        m="6px 0 20px"
                        fontSize={['28px', '34px']}
                    />
                    <ButtonWrapper onClick={() => setPopupState(true)}>
                        <Button isHero isBlue isEvil={isEvil} />
                    </ButtonWrapper>
                </InfoWrapper>
            </Icons>
        </Wrapper>
    );
};

export default Hero;
