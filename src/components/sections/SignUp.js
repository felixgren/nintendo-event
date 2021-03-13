import styled from 'styled-components';
import EventInfo from '../EventInfo';
import Form from '../Form';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 755px;
    color: #ff0000;
`;
const EventInfoWrapper = styled.div`
    padding: 64px 16px;
`;

const SignUp = () => {
    return (
        <Wrapper>
            <EventInfoWrapper>
                <EventInfo />
            </EventInfoWrapper>
            <Form />
        </Wrapper>
    );
};

export default SignUp;
