import styled from 'styled-components';
import Hero from './Hero';
import GameInfo from './GameInfo';
import SignUp from './SignUp';
import VideoGallery from './VideoGallery';
import Footer from './Footer';

const PageWrapper = styled.div``;

const Gap = styled.div`
    width: 100%;
    height: 20px;
    background: lightgrey;
`;

function App() {
    return (
        <PageWrapper>
            <SignUp />
            <Hero />
            <VideoGallery />
            <Gap />
            <GameInfo />
            <Footer />
        </PageWrapper>
    );
}

export default App;
