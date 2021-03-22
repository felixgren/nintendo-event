import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import theme from '../utils/theme';
import Text from './Text';

const Wrapper = styled.div`
    & > p,
    video {
        transition: 250ms;
    }

    &:hover > p {
        transform: translateY(5px);
    }

    &:hover > video {
        transform: translateY(5px);
    }
`;

const StyledVideo = styled.video`
    width: 150px;
    margin-right: 12px;
    filter: ${(props) => props.active && 'brightness(50%)'};
    cursor: pointer;

    ${theme.bp.desktop} {
        width: 180px;
        margin-right: 24px;
    }
`;

const Source = styled.source``;

const VideoThumbnail = ({ vidSrc, description, active }) => {
    return (
        <Wrapper>
            <StyledVideo
                muted
                disablekb
                loop
                active={active}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
            >
                <Source src={vidSrc} type="video/mp4" />
            </StyledVideo>
            <Text color="white" fontSize={['14px', '16px']} userSelect="none">
                {description}
            </Text>
        </Wrapper>
    );
};

VideoThumbnail.propTypes = {
    vidSrc: PropTypes.string.isRequired,
    active: PropTypes.bool,
    description: PropTypes.string,
};

VideoThumbnail.defaultProps = {
    active: false,
    description: '',
};

export default VideoThumbnail;
