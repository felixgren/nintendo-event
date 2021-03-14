import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import GameInfo from './GameInfo';
import SignUp from './SignUp';
import VideoGallery from './VideoGallery';
import Footer from './Footer';
import SignUpPopup from './SignUpPopup';
import Bowser from './Bowser';
// eslint-disable-next-line
import GlobalTest from './GlobalTest';

const PageWrapper = styled.div``;

function App() {
    const [showPopup, setPopupState] = useState(false);
    // eslint-disable-next-line
    const [bowserified, bowserify] = useState(false);
    console.log(bowserified);

    return (
        <PageWrapper>
            <Bowser />
            <Hero setPopupState={setPopupState} />
            <GameInfo />
            {showPopup && (
                <SignUpPopup
                    showPopup={showPopup}
                    setPopupState={setPopupState}
                />
            )}
            <VideoGallery />
            <SignUp />
            <Footer setPopupState={setPopupState} />
            <GlobalTest />
        </PageWrapper>
    );
}

export default App;
