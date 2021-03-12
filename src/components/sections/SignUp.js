import styled from 'styled-components';
import EventInfo from '../EventInfo';
import Form from '../Form';

const Wrapper = styled.div`
    width: 100%;
    height: 755px;
    color: #ff0000;
`;
const EventInfoWrapper = styled.div`
    padding: 64px 16px;
    border: 1px solid blue;
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
