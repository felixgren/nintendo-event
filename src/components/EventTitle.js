import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';

const Span = styled.span`
    font-weight: 400;
    text-transform: lowercase;
`;

const EventTitle = ({ color, size }) => {
    return (
        <Text
            color={color}
            size={size}
            fontStyle="italic"
            weight="600"
            transform="uppercase"
        >
            Mario <Span>vs</Span> Bowser
        </Text>
    );
};

EventTitle.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
};

EventTitle.defaultProps = {
    color: 'red',
    size: '30px',
};

export default EventTitle;
