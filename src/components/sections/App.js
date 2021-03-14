import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import GameInfo from './GameInfo';
import SignUp from './SignUp';
import VideoGallery from './VideoGallery';
import Footer from './Footer';
import SignUpPopup from './SignUpPopup';

const PageWrapper = styled.div``;

function App() {
    const [showPopup, setPopupState] = useState(false);
    console.log(showPopup);

    return (
        <PageWrapper>
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
        </PageWrapper>
    );
}

export default App;
