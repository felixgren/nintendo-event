import styled from 'styled-components';
import iconImage from '../../images/footer-icons.webp';
import Button from '../Button';
import Text from '../Text';
import EventTitle from '../EventTitle';

const Wrapper = styled.div`
    width: 100%;
    height: 570px;
    background: #ff0000;
`;

const EventInfo = styled.div`
    max-width: 1600px;
    margin: auto;
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

const Dates = styled.p`
    position: absolute;
    right: 70px;
    bottom: 30px;
    height: 80px;
    width: 330px;
`;

const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: white;
    height: 10%;
`;

const Bold = styled.b`
    font-weight: 600;
    font-size: 24px;
`;

const Footer = () => {
    return (
        <Wrapper>
            <EventInfo>
                <TopIcons src={iconImage} />
                <Button isBlue />
                <TextWrapper>
                    <Text
                        size="140px"
                        weight="800"
                        color="#a50505"
                        transform="uppercase"
                        lineHeight="148px"
                    >
                        It's game time
                    </Text>
                    <Dates>
                        <EventTitle color="#FFFFFF" size="28px" />

                        <Text
                            fontFamily="Montserrat-Italic"
                            color="#FFFFFF"
                            size="20px"
                            transform="uppercase"
                            m="4px 0 0 0"
                        >
                            Apr <Bold>27 -</Bold> June <Bold>2</Bold>
                        </Text>
                    </Dates>
                </TextWrapper>
            </EventInfo>
            <BottomWrapper>
                <Text w="1600px" color="black">
                    Social icons etc go here
                </Text>
            </BottomWrapper>
        </Wrapper>
    );
};

export default Footer;
