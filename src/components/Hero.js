import styled from 'styled-components';
import CatLogo from '../icons/CatLogo';

const Wrapper = styled.div``;

const Hero = () => {
    return (
        <Wrapper>
            <CatLogo
                // spikeColor="red"
                // headColor="green"
                // eyeColor="blue"
                width="700px"
                height="700px"
            />
        </Wrapper>
    );
};

export default Hero;
