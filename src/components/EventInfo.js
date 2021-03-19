import styled from 'styled-components';
import Text from './Text';
import EventTitle from './EventTitle';
import theme from '../utils/theme';

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
    width: 360px;
    margin-top: 20px;

    & > p {
        font-family: 'Montserrat-Italic';
    }
    ${theme.bp.desktop} {
        margin-top: 32px;
        width: 380px;
    }
`;

const Bold = styled.b`
    font-weight: 600;
    font-size: 20px;

    ${theme.bp.desktop} {
        font-size: 24px;
    }
`;

const EventInfo = () => {
    return (
        <Wrapper>
            <Div>
                <EventTitle fontSize={['18px', '24px']} />
                <Text m="0 8px" fontSize={['28px', '40px']} fontWeight="300">
                    |
                </Text>
                <Text
                    fontSize={['12px', '16px']}
                    fontWeight="500"
                    transform="uppercase"
                    width="60px"
                >
                    Event 2021
                </Text>
            </Div>

            <Div>
                <Text fontSize={['16px', '22px']} transform="uppercase">
                    Apr <Bold>27</Bold>
                    <Bold> - </Bold> June <Bold>2</Bold>
                </Text>
            </Div>

            <Div>
                <Text
                    width={['92px', '110px']}
                    fontWeight="700"
                    fontSize={['14px', '18px']}
                    textAlign="right"
                >
                    Automobile building
                </Text>
                <Text m="0 8px" fontSize={['28px', '40px']} fontWeight="300">
                    |
                </Text>
                <Text fontWeight="500" width="120px" fontSize="16px">
                    Fair Park Dallas, Texas
                </Text>
            </Div>
        </Wrapper>
    );
};

export default EventInfo;
