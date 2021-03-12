import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
    font-family: ${(props) => props.fontFamily};
    font-style: ${(props) => props.fontStyle};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    margin: ${(props) => props.m};
    max-width: ${(props) => props.maxWidth};
    padding: ${(props) => props.p};
    text-align: ${(props) => props.align};
    line-height: ${(props) => props.lineHeight};
    text-transform: ${(props) => props.transform};
    letter-spacing: 0.02em;
`;

Text.propTypes = {
    as: PropTypes.oneOf(['p', 'span', 'h1', 'h2', 'h3']),
    children: PropTypes.node.isRequired,
    fontFamily: PropTypes.string,
    fontStyle: PropTypes.string,
    align: PropTypes.string,
    lineHeight: PropTypes.string,
    transform: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string,
    m: PropTypes.string,
    p: PropTypes.string,
    maxWidth: PropTypes.string,
};

Text.defaultProps = {
    as: 'p',
    size: '24px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    weight: '400',
    color: 'red',
    w: 'auto',
    h: 'auto',
    m: '0',
    p: '0',
    align: 'left',
    maxWidth: 'unset',
    lineHeight: '1.2em',
    transform: 'initial',
};

export default Text;
