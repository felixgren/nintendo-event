import styled from 'styled-components/macro';
import Form from '../Form';
import Text from '../Text';
import marioPole from '../../images/form-mario.webp';
import popupIcons from '../../images/popup-icons.webp';
import CrossIcon from '../../icons/CrossIcon';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const DarkOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    z-index: 15;
`;

const Wrapper = styled.div`
    width: 90%;
    max-width: 967px;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);

    ${theme.bp.desktop} {
        flex-direction: row;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 22px 20px 8px;
    border-radius: 0 0 10px 10px;

    ${theme.bp.desktop} {
        border-radius: 10px 0 0 10px;
        padding: 54px;
    }
`;

const BackgroundWrapper = styled.div`
    background-color: red;
    padding: 18px 14px 68px;
    border-radius: 10px 10px 0 0;
    position: relative;

    ${theme.bp.desktop} {
        border-radius: 0 10px 10px 0;
        padding: 54px 20px;
    }
`;

const CrossWrapper = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 4px;
    cursor: pointer;
`;

const Image = styled.img`
    position: absolute;
    bottom: 0;
    right: -114px;
    width: 110%;
    max-width: 400px;
    z-index: 2;
    display: none;

    ${theme.bp.desktop} {
        display: initial;
    }
`;

const Icons = styled.img`
    position: absolute;
    bottom: 8px;
    left: 12px;
    width: 90%;
`;

const SignUpPopup = ({ showPopup, setPopupState }) => {
    const isEvil = useBowser();

    return (
        <DarkOverlay>
            <Wrapper>
                <FormWrapper>
                    <Form isPopup />
                </FormWrapper>
                <BackgroundWrapper>
                    <CrossWrapper onClick={() => setPopupState(false)}>
                        <CrossIcon />
                    </CrossWrapper>
                    <Text
                        fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                        fontWeight="800"
                        fontSize={['40px', 'min(9vw, 76px)']}
                        transform="uppercase"
                        color="#a50505"
                        lineHeight="1em"
                        maxWidth="300px"
                    >
                        It’s game time!
                    </Text>
                    <Image src={marioPole} alt="mario on flag" />
                    <Icons src={popupIcons} alt="popup icons" />
                </BackgroundWrapper>
            </Wrapper>
        </DarkOverlay>
    );
};

export default SignUpPopup;
