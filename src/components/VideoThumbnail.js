import styled from 'styled-components';

const Wrapper = styled.div``;

const StyledVideo = styled.video`
    width: 200px;
    transition: 250ms;
    cursor: pointer;
    margin-right: 24px;

    &:hover {
        transform: scale(1.2);
    }
`;

const Text = styled.p`
    color: white;
`;

const Source = styled.source``;

const VideoThumbnail = ({ vidSrc, description }) => {
    return (
        <Wrapper>
            <StyledVideo
                muted
                disablekb
                loop
                useRef
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
            >
                <Source src={vidSrc} type="video/mp4" />
            </StyledVideo>
            <Text>{description}</Text>
        </Wrapper>
    );
};

export default VideoThumbnail;
