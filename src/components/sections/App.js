import React, { useState } from 'react';
import styled from 'styled-components';
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
// eslint-disable-next-line
import Bowser from './Bowser';
// eslint-disable-next-line
import BowserState from '../../utils/bowserState';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

const PageWrapper = styled.div``;

export const HejContext = React.createContext();
export const HejUpdateContext = React.createContext();

function App() {
    const [hejState, setHejState] = useState('hej');

    function setTestStateFunc(arg1) {
        setHejState(() => `hejhej! ${arg1}`);
    }

    const [showPopup, setPopupState] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <HejContext.Provider value={hejState}>
                <HejUpdateContext.Provider value={setTestStateFunc}>
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
                </HejUpdateContext.Provider>
            </HejContext.Provider>
        </ThemeProvider>
    );
}

export default App;
