import styled from 'styled-components';
import Text from './Text';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    margin-top: 32px;

    & > p {
        font-style: italic;
    }
`;

const Bold = styled.b`
    font-weight: 600;
    font-size: 24px;
`;

const EventInfo = () => {
    return (
        <Wrapper>
            <Div>
                <Text transform="uppercase">
                    <Bold>Mario</Bold>
                </Text>
                <Text m="0 6px">vs</Text>
                <Text transform="uppercase">
                    <Bold>Bowser</Bold>
                </Text>
                <Text m="0 8px" size="40px" weight="300">
                    |
                </Text>
                <Text weight="500" transform="uppercase" size="14px" w="44px">
                    Event 2021
                </Text>
            </Div>
            <Div>
                <Text size="20px" transform="uppercase">
                    Apr <Bold>27</Bold>
                    <Bold> - </Bold> June <Bold>2</Bold>
                </Text>
            </Div>
            <Div>
                <Text w="110px" weight="700" size="16px" align="right">
                    Automobile building
                </Text>
                <Text m="0 8px" size="40px" weight="300">
                    |
                </Text>
                <Text weight="500" w="100px" size="14px">
                    Fair Park Dallas, Texas
                </Text>
            </Div>
        </Wrapper>
    );
};

export default EventInfo;
