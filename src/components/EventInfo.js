import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #ff0000;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    width: 370px;
    height: auto;
    font-size: 24px;
    /* font-style: oblique -13deg; */
    font-style: italic;
`;

const Paragraph = styled.p``;

const ParagraphSmall = styled.p`
    font-size: 16px;
    /* width: 50px; */

    & ~ & {
        background-color: hotpink;
        width: 100px;
    }
`;

const Seperator = styled.p`
    font-size: 40px;
    font-weight: 300;
    padding: 0 10px;
`;

const Bold = styled.b`
    font-weight: 650;
    width: 100px;
`;

const EventInfo = () => {
    return (
        <Wrapper>
            <Div>
                <Paragraph>
                    <Bold>MARIO</Bold> vs <Bold>BOWSER</Bold>
                </Paragraph>
                <Seperator>|</Seperator>
                <ParagraphSmall>EVENT 2021</ParagraphSmall>
            </Div>
            <Div>
                <Paragraph>
                    APR <Bold>27</Bold> - JUNE <Bold>2</Bold>
                </Paragraph>
            </Div>
            <Div>
                <ParagraphSmall>
                    <Bold>Automobile building</Bold>
                </ParagraphSmall>
                <Seperator>|</Seperator>
                <ParagraphSmall>Fair Park Dallas, Texas</ParagraphSmall>
            </Div>
        </Wrapper>
    );
};

export default EventInfo;
