import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import BowserState from '../../utils/bowserState';
import Hero from './Hero';
// eslint-disable-next-line
import GameInfo from './GameInfo';
// eslint-disable-next-line
import GameGallery from './GameGallery';
// eslint-disable-next-line
import SignUp from './SignUp';
// eslint-disable-next-line
import VideoGallery from './VideoGallery';
// eslint-disable-next-line
import Footer from './Footer';
import SignUpPopup from './SignUpPopup';
// eslint-disable-next-line
import SessionTester from './SessionTester';
// eslint-disable-next-line
import AnimationTest from './AnimationTest';
import TestyTest from './TestyTest';
// eslint-disable-next-line
import Bowser from './Bowser';
// eslint-disable-next-line
// import BowserContext from '../../utils/bowserState';
import { ThemeProvider } from 'styled-components';
// import theme from '../../utils/theme';

const PageWrapper = styled.div``;
// useContext(BowserState());

// BowserState().createContext

// console.log(BowserState());
const myBowser = createContext(BowserState());

function App() {
    const [showPopup, setPopupState] = useState(false);

    return (
        <myBowser.Provider value={BowserState()}>
            {/* <ThemeProvider theme={theme}> */}
            {/* <BowserState.Provider value={BowserState(true)}> */}
            <PageWrapper>
                {/* <AnimationTest /> */}
                <SessionTester />
                <Hero setPopupState={setPopupState} />
                <GameInfo />
                <GameGallery />
                <Bowser />
                <SignUp />
                <VideoGallery />
                {showPopup && <SignUpPopup showPopup={showPopup} setPopupState={setPopupState} />}
                <Footer setPopupState={setPopupState} />
            </PageWrapper>
            {/* </BowserState.Provider> */}
            {/* </ThemeProvider> */}
        </myBowser.Provider>
    );
}

export default App;
