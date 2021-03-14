import styled from 'styled-components';
import Hero from './Hero';
import GameInfo from './GameInfo';
import SignUp from './SignUp';
import VideoGallery from './VideoGallery';
import Footer from './Footer';
import SignUpPopup from './SignUpPopup';

const PageWrapper = styled.div``;

function App() {
    return (
        <PageWrapper>
            <Hero />
            <GameInfo />
            {/* <SignUpPopup /> */}
            <VideoGallery />
            <SignUp />
            <Footer />
        </PageWrapper>
    );
}

export default App;
