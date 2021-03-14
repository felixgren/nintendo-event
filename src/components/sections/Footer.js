import styled from 'styled-components';
import iconImage from '../../images/footer-icons.webp';
import marioImage from '../../images/footer-cats.webp';
import youtubeLogo from '../../images/footer-youtube.webp';
import twitterLogo from '../../images/footer-twitter.webp';
import instagramLogo from '../../images/footer-instagram.webp';
import facebookLogo from '../../images/footer-facebook.webp';
import nintendoLogo from '../../images/sponsors-nintendo-logo.webp';
import Button from '../Button';
import Text from '../Text';
import EventTitle from '../EventTitle';

const Wrapper = styled.div`
    width: 100%;
    background: #ff0000;
`;

const FooterComp = styled.footer`
    width: 100%;
    max-width: 1648px;
    margin: auto;
    padding: 0 24px;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TopIcons = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    padding: 20px 0;
`;

const TextWrapper = styled.div`
    display: flex;
    position: relative;
    width: auto;
    min-width: 800px;
    height: 300px;
`;

const Dates = styled.div`
    position: absolute;
    right: 18%;
    bottom: 38px;
    height: 80px;
`;

const Bold = styled.b`
    font-weight: 600;
    font-size: 24px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 670px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & > div {
        margin-top: 30px;
    }
`;

const Image = styled.img`
    margin-top: -30px;
    z-index: 1;
    width: 100%;
    max-width: 540px;
`;

const BottomWrapper = styled.div`
    width: 100%;
    justify-content: center;
    background-color: white;
    padding: 8px 0;
`;

const SocialsWrapper = styled.div`
    max-width: 1648px;
    padding: 0 24px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SocialDiv = styled.div``;

const SocialIcon = styled.img`
    padding-right: 16px;
    height: 29px;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    width: 100%;
`;

const Footer = ({ setPopupState }) => {
    return (
        <Wrapper>
            <FooterComp>
                <TopIcons src={iconImage} />

                <Div>
                    <TextWrapper>
                        <Text
                            size="min(9.5vw, 160px)"
                            weight="800"
                            color="#a50505"
                            transform="uppercase"
                            lineHeight="144px"
                        >
                            It’s game time!
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
                                Apr <Bold>27 - </Bold> June <Bold>2</Bold>
                            </Text>
                        </Dates>
                    </TextWrapper>

                    <ImageWrapper>
                        <ButtonWrapper onClick={() => setPopupState(true)}>
                            <Button isBlue />
                        </ButtonWrapper>
                        <Image src={marioImage} alt="mario and friends" />
                    </ImageWrapper>
                </Div>
            </FooterComp>
            <BottomWrapper>
                <SocialsWrapper>
                    <SocialDiv>
                        <SocialIcon src={twitterLogo} alt="twitter" />
                        <SocialIcon src={facebookLogo} alt="facebook" />
                        <SocialIcon src={instagramLogo} alt="instagram" />
                        <SocialIcon src={youtubeLogo} alt="youtube" />
                    </SocialDiv>
                    <SocialIcon src={nintendoLogo} alt="nintendo logo" />
                </SocialsWrapper>
            </BottomWrapper>
        </Wrapper>
    );
};

export default Footer;
