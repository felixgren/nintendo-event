import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    max-width: ${(props) => (props.isHero ? '300px' : '520px')};
    margin: auto;
`;

const StyledButton = styled.button`
    background-color: #ffc901;
    width: 100%;
    height: ${(props) => (props.isHero ? '90px' : '70px')};
    transition: 150ms;
    border: 4px solid black;
    border-radius: 8px;
    margin: 8px 6px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;

    &:hover {
        transform: ${(props) =>
            props.isHero
                ? 'translate(-12px, -10px)'
                : 'translate(-10px, -8px)'};
    }
    &:focus {
        outline: none;
    }
`;

const HiddenButton = styled.div`
    width: 100%;
    height: ${(props) => (props.isHero ? '90px' : '70px')};
    background-color: ${(props) => (props.isBlue ? '#4693DF' : 'red')};
    position: absolute;
    left: ${(props) => (props.isHero ? '-6px' : '-4px')};
    top: ${(props) => (props.isHero ? '-2px' : '0')};
    border: 4px solid black;
    border-radius: 8px;
`;

const Dot = styled.div`
    width: 7px;
    height: 7px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: ${(props) => props.top && '6px'};
    left: ${(props) => props.left && '6px'};
    bottom: ${(props) => props.bottom && '6px'};
    right: ${(props) => props.right && '6px'};
    z-index: 1;
`;

const Button = ({ isHero, isBlue }) => {
    return (
        <Wrapper isHero={isHero}>
            <HiddenButton isHero={isHero} isBlue={isBlue} />
            <StyledButton isHero={isHero}>
                <Dot top left />
                <Dot top right />
                <Dot bottom left />
                <Dot bottom right />
                <Text
                    align="center"
                    transform="uppercase"
                    color="black"
                    weight="600"
                    size="28px"
                >
                    Join Event
                </Text>
            </StyledButton>
        </Wrapper>
    );
};

Button.propTypes = {
    isHero: PropTypes.bool,
    isBlue: PropTypes.bool,
};

Button.defaultProps = {
    isHero: false,
    isBlue: false,
};

export default Button;
