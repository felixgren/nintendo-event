import styled from 'styled-components';
import CatLogo from '../icons/CatLogo';
import React, { useState } from 'react';

const Wrapper = styled.div``;

const Button = styled.button`
    width: 150px;
    height: 25px;
`;

const Hero = () => {
    const [isClicked, setClicked] = useState(false);
    const [color, setOrange] = useState('black');

    console.log(isClicked);
    return (
        <Wrapper>
            <Button
                onClick={() => {
                    setClicked(!isClicked);
                    setOrange('orange');
                }}
            >
                {isClicked ? 'thank u' : 'Click me'}
            </Button>
            <CatLogo
                spikeColor={isClicked ? 'black' : 'blue'}
                headColor="black"
                eyeColor={color}
                width="700px"
                height="700px"
            />
        </Wrapper>
    );
};

export default Hero;
