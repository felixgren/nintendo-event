import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import GameInfo from './GameInfo';
import SignUp from './SignUp';
import VideoGallery from './VideoGallery';
import Footer from './Footer';
import SignUpPopup from './SignUpPopup';
import SessionTester from './SessionTester';
// eslint-disable-next-line
import Bowser from './Bowser';

const PageWrapper = styled.div``;

function App() {
    const [showPopup, setPopupState] = useState(false);

    return (
        <PageWrapper>
            <Bowser />
            <SessionTester />
            <Hero setPopupState={setPopupState} />
            <VideoGallery />
            <GameInfo />
            {showPopup && (
                <SignUpPopup
                    showPopup={showPopup}
                    setPopupState={setPopupState}
                />
            )}
            <SignUp />
            <Footer setPopupState={setPopupState} />
        </PageWrapper>
    );
}

export default App;
