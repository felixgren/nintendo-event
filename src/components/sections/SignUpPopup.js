import styled from 'styled-components';
import Form from '../Form';
import Text from '../Text';
import marioPole from '../../images/form-mario.webp';
import popupIcons from '../../images/popup-icons.webp';
import CrossIcon from '../../icons/CrossIcon';

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
    z-index: 10;
`;

const Wrapper = styled.div`
    width: 90%;
    max-width: 976px;
    display: flex;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

const FormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 54px;
    border-radius: 10px 0 0 10px;
`;

const BackgroundWrapper = styled.div`
    background-color: red;
    padding: 54px 20px;
    border-radius: 0 10px 10px 0;
    position: relative;
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
`;

const Icons = styled.img`
    position: absolute;
    bottom: 8px;
    left: 12px;
    width: 90%;
`;

const SignUpPopup = () => {
    return (
        <DarkOverlay>
            <Wrapper>
                <FormWrapper>
                    <Form isPopup />
                </FormWrapper>
                <BackgroundWrapper>
                    <CrossWrapper>
                        <CrossIcon />
                    </CrossWrapper>
                    <Text
                        weight="800"
                        size="min(9vw, 76px)"
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
