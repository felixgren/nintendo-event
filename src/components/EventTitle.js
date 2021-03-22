import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Text from './Text';

const Span = styled.span`
    font-weight: 400;
    text-transform: lowercase;
`;

const EventTitle = ({ color, fontSize, textAlign, m, fontFamily }) => {
    return (
        <Text
            color={color}
            fontSize={fontSize}
            fontFamily={fontFamily}
            textAlign={textAlign}
            fontWeight="600"
            transform="uppercase"
            m={m}
        >
            Mario <Span>vs</Span> Bowser
        </Text>
    );
};

EventTitle.propTypes = {
    fontFamily: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    textAlign: PropTypes.string,
    m: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

EventTitle.defaultProps = {
    color: 'red',
    fontSize: '30px',
    textAlign: 'initial',
    m: '0',
};

export default EventTitle;
