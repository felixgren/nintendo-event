import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Thumbnail from './../VideoThumbnail';
import Text from '../Text';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

import marioVideo1 from '../../videos/marioVideo1.mov';
import marioVideo2 from '../../videos/marioVideo2.webm';
import marioVideo3 from '../../videos/marioVideo3.mov';

import bowserVideo1 from '../../videos/bowsersfury3.mov';
import bowserVideo2 from '../../videos/bowsersfury2.mov';
import bowserVideo3 from '../../videos/bowsersfury1.mov';

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
    const [activeVideo, setActiveVideo] = useState();
    const [activeFade, setFade] = useState(false);
    const [videos, setVideos] = useState([]);

    let bowserVideos = [          
        {
            src: bowserVideo1,
            thumbnailDesc: 'C.1 Bowser Jrs world',
            title: 'Challenge 1',
            description:
                'First challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
        {
            src: bowserVideo2,
            thumbnailDesc: 'C.2 Cat power',
            title: 'Challenge 2',
            description:
                'Second challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
        {
            src: bowserVideo3,
            thumbnailDesc: 'C.3 Speed test',
            title: 'Challenge 3',
            description:
                'Third challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
    ];

    let marioVideos = [
        {
            src: marioVideo1,
            thumbnailDesc: 'C.1 Bowsers car',
            title: 'Challenge 1',
            description:
                'First challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
        {
            src: marioVideo2,
            thumbnailDesc: 'C.2 Cat power',
            title: 'Challenge 2',
            description:
                'Second challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
        {
            src: marioVideo3,
            thumbnailDesc: 'C.3 Speed test',
            title: 'Challenge 3',
            description:
                'Third challenge: be the one to get all 1000 lives first schallenge: be the one to get be the one to get all 1000 lives first schallenge: be the one to get...',
        },
    ];

    useEffect(() => {
        if(isEvil) {
            setVideos(bowserVideos);
            setActiveVideo(bowserVideos[0]);
        }
        if(!isEvil) {
            setVideos(marioVideos);
            setActiveVideo(marioVideos[0]);
        }
    }, [isEvil]);

    return (
        <Wrapper>
            <ActiveVideo
                activeFade={activeFade}
                key={activeVideo && activeVideo.src}
                autoPlay
                loop
                playsInline
                muted
                disablekb
            >
                <Source src={activeVideo && activeVideo.src} type="video/mp4" />
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
                    {activeVideo && activeVideo.title}
                </Text>
                <Text
                    fontSize={['16px', '24px']}
                    lineHeight="1.4em"
                    fontWeight={['400', '500']}
                    color="white"
                    maxWidth={['320px', '470px']}
                >
                    {activeVideo && activeVideo.description}
                </Text>
            </TextWrapper>

            <ThumbnailWrapper>
                {videos && videos.map((video, key) => (
                    <Div
                        key={key}
                        onClick={() => {
                            setFade(true);
                            setTimeout(() => setActiveVideo(video), 250);
                            setTimeout(() => setFade(false), 500);
                        }}
                    >
                        {isEvil && 
                            <Thumbnail
                                active={video.title === activeVideo && activeVideo.title}
                                vidSrc={video.src}
                                description={video.thumbnailDesc}
                            />
                        }
                        {!isEvil && 
                            <Thumbnail
                                active={video.title === activeVideo && activeVideo.title}
                                vidSrc={video.src}
                                description={video.thumbnailDesc}
                            />
                        }
                    </Div>
                ))}
            </ThumbnailWrapper>
        </Wrapper>
    );
};

export default VideoGallery;
