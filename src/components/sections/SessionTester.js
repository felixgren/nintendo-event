import styled from 'styled-components';
import Text from '../Text';

const Wrapper = styled.div`
    position: fixed;
    z-index: 1337;
    opacity: 0.8;
    width: 300px;
    height: 120px;
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
    let mykey = 'bowserMode';
    let data = sessionStorage.getItem({ mykey });
    return (
        <Wrapper>
            <StyledText
                color="green"
                onClick={() => {
                    sessionStorage.setItem(`${mykey}`, true);
                    console.log(`Set: ${sessionStorage.getItem(mykey)}`);
                }}
            >
                set true
            </StyledText>
            <StyledText
                color="blue"
                onClick={() => {
                    sessionStorage.setItem(`${mykey}`, false);
                    console.log(`Set: ${sessionStorage.getItem(mykey)}`);
                }}
            >
                set false
            </StyledText>
            <StyledText
                color="purple"
                onClick={() => {
                    data = sessionStorage.getItem(`${mykey}`);
                    console.log(`Read: ${data}`);
                }}
            >
                read session
            </StyledText>
            <StyledText
                color="red"
                onClick={() => {
                    console.log(`Deleting ${mykey}...`);
                    data = sessionStorage.removeItem(`${mykey}`);
                    console.log(`${mykey}: ${sessionStorage.getItem(mykey)}`);
                    console.log(sessionStorage.getItem(mykey));
                }}
            >
                reset session
            </StyledText>
        </Wrapper>
    );
};

export default SessionTester;
