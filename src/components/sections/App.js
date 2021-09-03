import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Hero from './Hero';
import GameInfo from './GameInfo';
import GameGallery from './GameGallery';
import SignUp from './SignUp';
import VideoGallery from './VideoGallery';
import Footer from './Footer';
import SignUpPopup from './SignUpPopup';
// eslint-disable-next-line
import SessionTester from './SessionTester';
// eslint-disable-next-line
import AnimationTest from './AnimationTest';
import Bowser from './Bowser';
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
                    {/* <SessionTester /> */}
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
