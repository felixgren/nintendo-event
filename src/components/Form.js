import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import EventTitle from './EventTitle';
import Button from './Button';

const Wrapper = styled.div`
    width: 100%;
    max-width: 520px;
    margin: 8px;
`;

const Div = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 10px;
`;

const StyledForm = styled.form`
    margin-top: 6px;
`;

const Input = styled.input`
    width: 100%;
    height: 60px;
    border: 2px solid red;
    border-radius: 4px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    margin-top: 16px;
    box-shadow: -4px -4px 0px red;
    color: red;
    font-size: 20px;
    font-weight: 500;
    padding: 0 24px;
    letter-spacing: 0.05em;
    transition: 200ms;
    color: black;

    &::placeholder {
        font-weight: 400;
    }
    &:focus {
        transform: translate(-3px, -3px);
        box-shadow: 0 0 0 red;
        outline: none;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    padding: 20px 36px;
    position: relative;
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
`;

const CheckboxSpan = styled.span`
    position: absolute;
    top: 16px;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2px solid red;
    box-shadow: -4px -4px 0px red;
    margin-right: 8px;
    border-radius: 2px;

    /* &::before {
        content: 'url("https://mdn.mozillademos.org/files/12668/MDN.svg%22)';
        position: absolute;
        font-size: 1.2em;
        right: 0;
        top: 0;
        visibility: hidden;
        background-color: red;
    }

    &:checked::before {
        border-color: black;
        background: #ddd;
        color: gray;
    }

    &:checked::before {
        visibility: visible;
        background-color: red;
    } */
`;

const Form = ({ isPopup }) => {
    return (
        <Wrapper>
            {isPopup && (
                <Div>
                    <Text fontStyle="italic" transform="uppercase" size="28px">
                        Event 2021
                    </Text>
                    <EventTitle size="28px" />
                </Div>
            )}

            <Text transform="uppercase" weight="700" size="42px">
                Take the challenge
            </Text>
            <StyledForm action="" method="">
                <Input
                    ariaLabel="fullName"
                    type="text"
                    id="fullName"
                    placeholder="Full name"
                />
                <Input
                    ariaLabel="Email"
                    type="email"
                    id="email"
                    placeholder="Email"
                />
                <Input
                    ariaLabel="Phone"
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                />

                <Label>
                    <CheckboxInput type="checkbox" />
                    <CheckboxSpan />
                    <Text
                        size="14px"
                        color="black"
                        fontStyle="italic"
                        weight="300"
                    >
                        I have read and accepted the privacy policy
                    </Text>
                </Label>

                {/* <Input type="submit" value="Send" /> */}
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
