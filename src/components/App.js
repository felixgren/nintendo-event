import styled from 'styled-components';
import Hero from './Hero';
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
            <Hero />
            <SignUp />
            <VideoGallery />
            <Gap />
            <Footer />
        </PageWrapper>
    );
}

export default App;
