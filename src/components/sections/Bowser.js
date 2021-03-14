// eslint-disable-next-line
import React, { useState } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100px;
`;

const Bowser = ({ bowserified, bowserify }) => {
    console.log(bowserify);
    return (
        <Wrapper>
            <p>yo 🐉</p>
        </Wrapper>
    );
};

Bowser.propTypes = {};

Bowser.defaultProps = {};

export default Bowser;
