import styled from 'styled-components/macro';
import iconImg from '../../images/footer-icons.webp';
import evilIconImg from '../../images/bowser/background-icons.png';
import marioImage from '../../images/footer-cats.webp';
import allCats from '../../images/bowser/all-cats.png';
import socialLogos from '../../images/social-logos.png';
import nintendoLogo from '../../images/sponsors-nintendo-logo.png';
import Button from '../Button';
import Text from '../Text';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const Wrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.isEvil ? 'black' : 'red'};
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
    height: 79px;
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
    ${theme.bp.desktop} {
        min-width: 62%;
    }
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
    margin-top: ${(props) => props.isEvil ? '20px' : '-30px'};
    z-index: 1;
    width: ${(props) => props.isEvil ? '120%' : '100%'};
    max-width: ${(props) => props.isEvil ? 'unset' : '540px'};
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    margin-right: ${(props) => props.isEvil && '-24px'};
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

const SocialIcon = styled.img`
    padding-right: 16px;
    height: 20px;
    
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
        <Wrapper isEvil={isEvil}>
            <FooterComp>
                <TopIcons src={isEvil ? evilIconImg : iconImg} alt="Icons of mario characters" />

                <Div>
                    <TextWrapper>
                        <Text
                            fontSize={[isEvil ? '56px' : '53px', 'min(9.5vw, 160px)']}
                            fontWeight="800"
                            color="#a50505"
                            transform="uppercase"
                            lineHeight={isEvil ? '1.1em' : ['50px', '1em']}
                            userSelect="none"
                            fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                        >
                            It’s game time!
                        </Text>
                    </TextWrapper>

                    <ImageWrapper>
                        <ButtonWrapper onClick={() => setTimeout(() => setPopupState(true), 200)}>
                            <Button isBlue />
                        </ButtonWrapper>
                        <Image isEvil={isEvil} src={isEvil ? allCats : marioImage} alt="Mario and friends" />
                    </ImageWrapper>
                </Div>
            </FooterComp>
            <BottomWrapper>
                <SocialsWrapper>
                    <SocialIcon src={socialLogos} alt="Social Icons" />
                    <SocialIcon src={nintendoLogo} alt="Nintendo logo" />
                </SocialsWrapper>
            </BottomWrapper>
        </Wrapper>
    );
};

export default Footer;
