import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { space, layout, color, typography } from 'styled-system';

const Text = styled.p`
    ${space}
    ${layout}
    ${color}
    ${typography}

    text-transform: ${(props) => props.transform};
    user-select: ${(props) => props.userSelect};
    letter-spacing: 0.02em;
`;

Text.propTypes = {
    as: PropTypes.oneOf(['p', 'span', 'h1', 'h2', 'h3']),
    children: PropTypes.node.isRequired,
    fontFamily: PropTypes.string,
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    transform: PropTypes.string,
    userSelect: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    color: PropTypes.string,
};

Text.defaultProps = {
    as: 'p',
    fontFamily: 'Montserrat',
    fontSize: ['16px', '24px'],
    color: 'red',
    m: '0',
    p: '0',
    lineHeight: '1.2em',
    transform: 'initial',
    userSelect: 'initial',
};

export default Text;
