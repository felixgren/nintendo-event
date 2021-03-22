import React, { useState } from 'react';
import styled from 'styled-components/macro';
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
import { ThemeProvider } from 'styled-components';
import { BowserProvider } from './BowserContext';
import theme from '../../utils/theme';

const PageWrapper = styled.div``;

function App() {
    const [showPopup, setPopupState] = useState(false);
    return (
        <BowserProvider>
            <ThemeProvider theme={theme}>
                <PageWrapper>
                    {/* <AnimationTest /> */}
                    <SessionTester />
                    <Hero setPopupState={setPopupState} />
                    <VideoGallery />
                    <GameInfo />
                    <GameGallery />
                    <SignUp />
                    <Bowser />
                    {showPopup && (
                        <SignUpPopup
                            showPopup={showPopup}
                            setPopupState={setPopupState}
                        />
                    )}
                    <Footer setPopupState={setPopupState} />
                </PageWrapper>
            </ThemeProvider>
        </BowserProvider>
    );
}

export default App;
