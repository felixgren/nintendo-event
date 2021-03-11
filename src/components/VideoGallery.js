import styled from 'styled-components';
import Thumbnail from './VideoThumbnail';
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video1.mp4';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    background: tomato;
    color: #ffffff;
    padding: 64px;
`;

const ActiveVideo = styled.video`
    width: 100%;
`;

const Source = styled.source``;

const ThumbnailWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
`;

const VideoGallery = () => {
    return (
        <Wrapper>
            <ActiveVideo muted disablekb autoPlay loop>
                <Source src={video1} type="video/mp4" />
            </ActiveVideo>

            <ThumbnailWrapper>
                <Thumbnail vidSrc={video1} description="C.1 Bowsers car" />
                <Thumbnail vidSrc={video2} description="C.2 Cat power" />
                <Thumbnail vidSrc={video3} description="C.3 test" />
            </ThumbnailWrapper>
        </Wrapper>
    );
};

export default VideoGallery;
