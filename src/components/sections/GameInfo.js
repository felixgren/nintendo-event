import styled from 'styled-components';
import EventInfo from '../EventInfo';
import Text from '../Text';

const Wrapper = styled.div`
    width: 100%;
    height: 755px;
    color: #ff0000;
`;
const EventInfoWrapper = styled.div`
    padding: 64px 16px;
`;

const Strong = styled.strong`
    font-weight: 800;
    font-size: 46px;
`;

const GameInfo = () => {
    return (
        <Wrapper>
            <EventInfoWrapper>
                <Text align="center" size="38px" transform="uppercase">
                    New <Strong>Super Mario 3D</Strong> World
                </Text>
                <EventInfo />
                <Text align="center">
                    soon i will be filled with COOL info 😎
                </Text>
            </EventInfoWrapper>
        </Wrapper>
    );
};

export default GameInfo;
