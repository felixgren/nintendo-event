import styled from 'styled-components';
import heroBackground from '../../images/hero-background.webp';
import heroLogo from '../../images/hero-logo.webp';
import Button from '../Button';
import EventTitle from '../EventTitle';
import Text from '../Text';

const Wrapper = styled.div`
    width: 100%;
    height: 1024px;
    background: #ff0000;
    text-align: center;
    color: #ffffff;
`;

const Icons = styled.div`
    height: 100%;
    background: no-repeat url(${heroBackground});
    background-position: top;
    z-index: -100;
`;

const Logo = styled.div`
    height: 50%;
    background: no-repeat url(${heroLogo});
    background-position: 50% 30%;
`;

const InfoWrapper = styled.div`
    margin: auto;
    width: 700px;
    background: linear-gradient(
        270deg,
        rgba(255, 0, 0, 0) 0%,
        #ff0000 52.08%,
        rgba(255, 0, 0, 0) 100%
    );
`;

const StyledText = styled(Text)`
    &::first-letter {
        text-transform: capitalize;
    }
`;

const InviteText = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const country = params.get('country');

    return (
        <StyledText color="white" align="center" fontStyle="italic">
            {name && `${name}!`} You are invited to travel{' '}
            {country ? `from ${country} to 🇯🇵 to` : 'to 🇯🇵 and'} participate
            in...
            {/* You are invited to travel to Japan and participate in... */}
            {/* You are invited to travel from Sweden to Japan to participate in... */}
            {/* Kanye! You are invited to travel from Sweden to Japan to participate in... */}
        </StyledText>
    );
};

const Hero = () => {
    return (
        <Wrapper>
            <Icons>
                <Logo />
                <InfoWrapper>
                    <InviteText />
                    <EventTitle
                        color="white"
                        align="center"
                        size="40px"
                        m="4px 0 20px"
                    />
                    <Button isHero isBlue />
                </InfoWrapper>
            </Icons>
        </Wrapper>
    );
};

export default Hero;
