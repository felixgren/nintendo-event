import styled from 'styled-components';
import Hero from './Hero';
import Footer from './Footer';
import VideoGallery from './VideoGallery';

const PageWrapper = styled.div``;

const Gap = styled.div`
    width: 100%;
    height: 20px;
    background: lightgrey;
`;

function App() {
    return (
        <PageWrapper>
            <VideoGallery />
            <Hero />
            <Gap />
            <Footer />
        </PageWrapper>
    );
}

export default App;
