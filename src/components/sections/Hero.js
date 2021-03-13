import styled from 'styled-components';
import heroBackground from '../../images/hero-background.webp';
import heroLogo from '../../images/hero-logo.webp';
import Button from '../Button';
import EventTitle from '../EventTitle';

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

const Date = styled.h2`
    font-weight: 700;
    font-size: 30px;
`;
const Span = styled.span`
    font-weight: 300;
    font-style: italic;
`;

const Hero = () => {
    return (
        <Wrapper>
            <Icons>
                <Logo />
                <InfoWrapper>
                    <Date>
                        EVENT 2021 <Span>APR 27 - JUNE 2</Span>
                    </Date>
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
