import React, { useState } from 'react';
import styled from 'styled-components';
import Thumbnail from './../VideoThumbnail';
import video1 from '../../videos/video1.mp4';
import video2 from '../../videos/video2.mp4';
import video3 from '../../videos/video1.mp4';

const Wrapper = styled.div`
    width: 100%;
    height: 55vw;
    position: relative;
    background: black;
    color: #ffffff;
    max-height: 100vh;
    box-shadow: inset 10px 10px 250px #000000;
`;

const ActiveVideo = styled.video`
    transition: opacity 250ms;
    opacity: ${(props) => (props.activeFade ? '0' : '1')};
    width: 100%;
    max-height: 100vh;
    height: 55vw;
    object-fit: cover;
`;

const Div = styled.div``;

const Source = styled.source``;

const ThumbnailWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 32px;
    left: 64px;
`;

const TextWrapper = styled.div`
    position: absolute;
    left: 64px;
    top: 64px;
`;

const Header = styled.h2`
    text-transform: uppercase;
    font-weight: 800;
    font-size: 50px;
    line-height: 61px;
`;

const Description = styled.p`
    width: 470px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`;

const Fade = styled.div`
    position: absolute;
    top: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(
        72.66deg,
        #000000 -7.66%,
        rgba(0, 0, 0, 0) 78.29%
    );
`;

const VideoGallery = () => {
    const videos = [
        {
            src: video1,
            thumbnailDesc: 'C.1 Bowsers car',
            title: 'Challenge 1',
            description:
                'First challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
        {
            src: video2,
            thumbnailDesc: 'C.2 Cat power',
            title: 'Challenge 2',
            description:
                'Second challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
        {
            src: video3,
            thumbnailDesc: 'C.3 test',
            title: 'Challenge 3',
            description:
                'Third challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
    ];

    const [activeVideo, setVideo] = useState(videos[0]);
    const [activeFade, setFade] = useState(false);

    return (
        <Wrapper>
            <ActiveVideo
                activeFade={activeFade}
                key={activeVideo.src}
                muted
                disablekb
                autoPlay
                loop
            >
                <Source src={activeVideo.src} type="video/mp4" />
            </ActiveVideo>

            <Fade activeFade={activeFade} />
            <TextWrapper>
                <Header>{activeVideo.title}</Header>
                <Description>{activeVideo.description}</Description>
            </TextWrapper>

            <ThumbnailWrapper>
                {videos.map((video, key) => (
                    <Div
                        key={key}
                        onClick={() => {
                            setFade(true);
                            setTimeout(() => setVideo(video), 250);
                            setTimeout(() => setFade(false), 500);
                        }}
                    >
                        <Thumbnail
                            active={video.title === activeVideo.title}
                            vidSrc={video.src}
                            description={video.thumbnailDesc}
                        />
                    </Div>
                ))}
            </ThumbnailWrapper>
        </Wrapper>
    );
};

export default VideoGallery;
