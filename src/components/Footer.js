import styled from 'styled-components';
import iconImage from '../images/footer-icons.webp';

const Wrapper = styled.div`
    width: 100%;
    height: 570px;
    background: green;
`;

const EventInfo = styled.div`
    display: flex;
    flex-direction: column;
    background: #ff0000;
    height: 90%;
`;

const TopIcons = styled.img`
    object-fit: cover;
    padding: 20px 0;
`;

const TextWrapper = styled.div`
    position: relative;
    width: 830px;
    height: 300px;
`;

const LargeText = styled.h2`
    text-transform: uppercase;
    font-size: 140px;
    font-weight: 800;
    line-height: 148px;
    letter-spacing: 0em;
    text-align: left;
    color: #a50505;

    &::after {
        content: '';
    }
`;

const Dates = styled.p`
    position: absolute;
    text-transform: uppercase;
    right: 70px;
    bottom: 30px;
    height: 80px;
    line-height: 33px;
    width: 330px;
    color: #ffffff;
    font-size: 30px;
    font-style: italic;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
`;

const VsSpan = styled.span`
    font-weight: 200;
    line-height: 29px;
    text-transform: lowercase;
`;

const BottomWrapper = styled.div`
    background: white;
    height: 10%;
`;

const Footer = () => {
    return (
        <Wrapper>
            <EventInfo>
                <TopIcons src={iconImage} />
                <TextWrapper>
                    <LargeText>It's game time</LargeText>
                    <Dates>
                        Mario <VsSpan>vs</VsSpan> Bowser apr 27 - june 2
                    </Dates>
                </TextWrapper>
            </EventInfo>
            <BottomWrapper>Social icons etc go here</BottomWrapper>
        </Wrapper>
    );
};

export default Footer;
