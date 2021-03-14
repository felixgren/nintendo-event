import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import colors from '../utils/colors';

const Span = styled.span`
    font-weight: 400;
    text-transform: lowercase;
`;

const EventTitle = ({ color, size, align, m }) => {
    return (
        <Text
            color={color}
            size={size}
            fontFamily="Montserrat-Italic"
            align={align}
            weight="600"
            transform="uppercase"
            m={m}
        >
            Mario <Span>vs</Span> Bowser
        </Text>
    );
};

EventTitle.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    align: PropTypes.string,
    m: PropTypes.string,
};

EventTitle.defaultProps = {
    color: 'red',
    size: '30px',
    align: 'initial',
    m: '0',
};

export default EventTitle;
