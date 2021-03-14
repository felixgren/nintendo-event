import React from 'react';
import PropTypes from 'prop-types';

const CrossIcon = ({ color }) => {
    return (
        <svg width="21" height="22" viewBox="0 0 21 22">
            <rect
                x="1.06055"
                y="1"
                width="28"
                height="2"
                transform="rotate(45 1.06055 1)"
                fill={color}
            />
            <rect
                y="20.7695"
                width="28"
                height="2"
                transform="rotate(-45 0 20.7695)"
                fill={color}
            />
        </svg>
    );
};

CrossIcon.propTypes = {
    color: PropTypes.string,
};

CrossIcon.defaultProps = {
    color: 'white',
};

export default CrossIcon;
