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
import theme from '../../utils/theme';
import { useBowser, useBowserUpdate } from './BowserContext';

const Wrapper = styled.div`
    width: 100%;
    background: #ff0000;
`;

const FooterComp = styled.footer`
    width: 100%;
    max-width: 1648px;
    margin: auto;
    padding: 0 24px;

    ${theme.bp.desktop} {
        padding: 0 24px;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 12px;

    ${theme.bp.desktop} {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const TopIcons = styled.img`
    width: 100%;
    height: 90px;
    object-fit: cover;
    padding: 20px 0;

    ${theme.bp.desktop} {
        max-width: 1500px;
        height: auto;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    position: relative;
    /* width: auto; */
    /* min-width: 800px; */
    /* height: 300px; */

    ${theme.bp.desktop} {
        min-width: 62%;
    }
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
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
`;

const BottomWrapper = styled.div`
    width: 100%;
    justify-content: center;
    background-color: white;
    padding: 8px 0;
`;

const SocialsWrapper = styled.div`
    max-width: 1648px;
    padding: 0 12px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SocialDiv = styled.div``;

const SocialIcon = styled.img`
    padding-right: 16px;
    height: 20px;
    cursor: pointer;

    ${theme.bp.desktop} {
        height: 29px;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
`;

const Footer = ({ setPopupState }) => {
    const isEvil = useBowser();
    return (
        <Wrapper>
            <FooterComp>
                <TopIcons src={iconImage} alt="Icons of mario characters" />

                <Div>
                    <TextWrapper>
                        <Text
                            fontSize={['60px', 'min(9.5vw, 160px)']}
                            fontWeight="800"
                            color="#a50505"
                            transform="uppercase"
                            lineHeight={['54px', '0.9em']}
                            userSelect="none"
                            fontFamily={isEvil && 'NewRocker'}
                        >
                            It’s game time!
                        </Text>
                        {/* <Dates>
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
                        </Dates> */}
                    </TextWrapper>

                    <ImageWrapper>
                        <ButtonWrapper onClick={() => setPopupState(true)}>
                            <Button isBlue isEvil={isEvil} />
                        </ButtonWrapper>
                        <Image src={marioImage} alt="Mario and friends" />
                    </ImageWrapper>
                </Div>
            </FooterComp>
            <BottomWrapper>
                <SocialsWrapper>
                    <SocialDiv>
                        <SocialIcon src={twitterLogo} alt="Twitter" />
                        <SocialIcon src={facebookLogo} alt="Facebook" />
                        <SocialIcon src={instagramLogo} alt="Instagram" />
                        <SocialIcon src={youtubeLogo} alt="Youtube" />
                    </SocialDiv>
                    <SocialIcon src={nintendoLogo} alt="Nintendo logo" />
                </SocialsWrapper>
            </BottomWrapper>
        </Wrapper>
    );
};

export default Footer;
