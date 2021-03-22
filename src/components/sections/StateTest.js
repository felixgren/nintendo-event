import styled from 'styled-components/macro';
import CatLogo from '../../icons/CatLogo';
import React, { Component } from 'react';

const Wrapper = styled.div``;

const Button = styled.button`
    width: 150px;
    height: 25px;
`;

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            lol: 'green',
        };
    }

    colorChange() {
        const { isClicked, lol } = this.state;
        if (!this.state.isClicked) {
            this.setState({ lol: 'orange', isClicked: true });
        } else this.setState({ lol: 'hotpink', isClicked: false });
    }

    render() {
        const { isClicked, lol } = this.state;
        console.log(isClicked);
        return (
            <Wrapper>
                <Button onClick={() => this.colorChange()}>Click me</Button>
                <CatLogo
                    spikeColor={isClicked ? 'red' : 'blue'}
                    headColor="black"
                    eyeColor={lol}
                    width="700px"
                    height="700px"
                />
            </Wrapper>
        );
    }
}

export default Hero;
