import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Text from './Text';
import EventTitle from './EventTitle';
import Button from './Button';
import theme from '../utils/theme';
import { useBowser } from '../components/sections/BowserContext';

const Wrapper = styled.div`
    width: 100%;
    max-width: 520px;
    margin-bottom: 16px;

    ${theme.bp.desktop} {
        margin-bottom: 0;
    }
`;

const Div = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 10px;
`;

const StyledForm = styled.form`
    ${theme.bp.desktop} {
        margin-top: 6px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 44px;
    border: 2px solid red;
    border-radius: 4px;
    font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
    margin-top: 16px;
    box-shadow: -4px -4px 0px ${(props) => (props.isEvil ? 'black' : 'red')};
    color: red;
    font-size: 16px;
    font-weight: 600;
    padding: 0 24px;
    letter-spacing: 0.05em;
    transition: 200ms;
    color: black;

    &:first-child {
        text-transform: capitalize;
    }

    &::placeholder {
        font-weight: 400;
    }
    &:focus {
        transform: translate(-3px, -3px);
        box-shadow: 0 0 0 red;
        outline: none;
    }

    ${theme.bp.desktop} {
        height: 60px;
        font-size: 20px;
        font-weight: 500;
        border: 3px solid red;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    padding: 10px 36px 20px;
    position: relative;

    ${theme.bp.desktop} {
        padding: 20px 36px 32px;
    }
`;

const CheckboxInput = styled.input`
    position: absolute;
    top: 16px;
    left: 0;
    opacity: 0;
    cursor: pointer;
    height: 25px;
    width: 25px;
    z-index: 2;

    &:checked ~ div {
        background-color: red;
    }
`;

const CheckboxSpan = styled.span`
    position: absolute;
    top: 16px;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2px solid red;
    box-shadow: -4px -4px 0px ${(props) => (props.isEvil ? 'black' : 'red')};
    margin-right: 8px;
    border-radius: 2px;
    transition: 0.2s;

    ${theme.bp.desktop} {
        border: 3px solid red;
    }
`;

const Form = ({ isPopup }) => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const isEvil = useBowser();

    return (
        <Wrapper>
            {isPopup && (
                <Div>
                    <Text
                        fontFamily="Montserrat-Italic"
                        transform="uppercase"
                        fontSize={['16px', '28px']}
                        color={isEvil ? 'black' : 'red'}
                    >
                        Event 2021
                    </Text>
                    <EventTitle color={isEvil ? 'black' : 'red'} fontSize={['16px', '28px']} />
                </Div>
            )}

            <Text
                textAlign={['center', 'left']}
                transform="uppercase"
                fontWeight="700"
                fontSize={isPopup ? ['24px', '42px'] : ['28px', '42px']}
                userSelect="none"
                color={isEvil ? 'black' : 'red'}
            >
                Take the challenge
            </Text>
            <StyledForm action="" method="">
                <Input
                    required
                    ariaLabel="fullName"
                    type="text"
                    id="fullName"
                    placeholder="Name"
                    defaultValue={name && name}
                    isEvil={isEvil}
                />
                <Input
                    required
                    ariaLabel="Email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    isEvil={isEvil}
                />
                <Input
                    required
                    ariaLabel="Phone"
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    isEvil={isEvil}
                />

                <Label>
                    <CheckboxInput type="checkbox" />
                    <CheckboxSpan isEvil={isEvil} />
                    <Text
                        fontSize="14px"
                        color="black"
                        fontFamily="Montserrat-Italic"
                    >
                        I have read and accepted the privacy policy
                    </Text>
                </Label>
                <Button type="submit" />
            </StyledForm>
        </Wrapper>
    );
};

Form.propTypes = {
    isPopup: PropTypes.bool,
};

Form.defaultProps = {
    isPopup: false,
};

export default Form;
