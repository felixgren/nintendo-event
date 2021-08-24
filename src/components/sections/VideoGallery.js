import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Thumbnail from './../VideoThumbnail';
import video1 from '../../videos/video1.mp4';
import video2 from '../../videos/video2.mp4';
import video3 from '../../videos/video1.mp4';
import Text from '../Text';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const Wrapper = styled.div`
    width: 100%;
    height: 550px;
    position: relative;
    background: black;
    color: #ffffff;
    max-height: 100vh;

    ${theme.bp.desktop} {
        height: 55vw;
    }
`;

const ActiveVideo = styled.video`
    transition: opacity 250ms;
    opacity: ${(props) => (props.activeFade ? '0' : '1')};
    width: 100%;
    max-height: 100vh;
    height: 550px;
    object-fit: cover;

    ${theme.bp.desktop} {
        height: 55vw;
    }
`;

const Div = styled.div``;

const Source = styled.source``;

const ThumbnailWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 16px;
    padding-left: 24px;
    overflow-x: auto;
    max-width: 100vw;
    min-height: 110px;

    ${theme.bp.desktop} {
        bottom: 32px;
        padding-left: 64px;
        min-height: 130px;
    }

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none; /* Firefox */
    }
`;

const TextWrapper = styled.div`
    position: absolute;
    left: 24px;
    top: 24px;

    ${theme.bp.desktop} {
        left: 64px;
        top: 64px;
    }
`;

const Fade = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 550px;
    background: linear-gradient(
        72.66deg,
        #000000 -7.66%,
        rgba(0, 0, 0, 0) 58.29%
    );

    ${theme.bp.desktop} {
        width: 60%;
        height: 100%;
        background: linear-gradient(
            72.66deg,
            #000000 -7.66%,
            rgba(0, 0, 0, 0) 78.29%
        );
    }
`;

const VideoGallery = () => {
    const isEvil = useBowser();

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
                <Text
                    fontFamily={isEvil ? 'NewRocker' : 'Montserrat'}
                    fontSize={['28px', '50px']}
                    lineHeight={['60px', '80px']}
                    fontWeight={['700', '800']}
                    color="white"
                    transform="uppercase"
                >
                    {activeVideo.title}
                </Text>
                <Text
                    fontSize={['16px', '24px']}
                    lineHeight="1.4em"
                    fontWeight={['400', '500']}
                    color="white"
                    maxWidth={['320px', '470px']}
                >
                    {activeVideo.description}
                </Text>
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
