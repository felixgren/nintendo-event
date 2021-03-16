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
import Bowser from './Bowser';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';

const PageWrapper = styled.div``;

function App() {
    const [showPopup, setPopupState] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                {/* <Bowser /> */}
                {/* <SessionTester /> */}
                <Hero setPopupState={setPopupState} />
                <VideoGallery />
                {/* <GameInfo /> */}
                {/* <GameGallery /> */}
                {showPopup && (
                    <SignUpPopup
                        showPopup={showPopup}
                        setPopupState={setPopupState}
                    />
                )}
                {/* <SignUp /> */}
                {/* <Footer setPopupState={setPopupState} /> */}
            </PageWrapper>
        </ThemeProvider>
    );
}

export default App;
