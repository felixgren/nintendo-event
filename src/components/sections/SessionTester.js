import styled from 'styled-components';
import Text from '../Text';

const Wrapper = styled.div`
    position: fixed;
    z-index: 1337;
    opacity: 0.8;
    width: 300px;
    height: 100px;
    background-color: #00ffffff;
    color: black;
    cursor: help;
`;

const StyledText = styled(Text)`
    font-weight: 600;
    cursor: pointer;

    &::first-letter {
        text-transform: capitalize;
    }
`;

const SessionTester = () => {
    let mykey = 'hej';
    let data = sessionStorage.getItem({ mykey });
    return (
        <Wrapper>
            <StyledText
                color="green"
                onClick={() => {
                    sessionStorage.setItem(`${mykey}`, 'omg guys i work!!!11');
                    console.log(`i set.. `);
                }}
            >
                set sessionstorage
            </StyledText>
            <StyledText
                color="blue"
                onClick={() => {
                    data = sessionStorage.getItem(`${mykey}`);
                    console.log(`i am reading: ${data}`);
                }}
            >
                read session
            </StyledText>
            <StyledText
                color="yellow"
                onClick={() => {
                    data = sessionStorage.removeItem(`${mykey}`);
                    console.log(`i have deleted...`);
                }}
            >
                reset session
            </StyledText>
        </Wrapper>
    );
};

export default SessionTester;
