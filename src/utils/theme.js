const colors = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    darkRed: '#a50505',
    lightRed: '#ffb3b3',
    blue: '#4693DF',
    yellow: '#ffc901',
};

const breakpoints = ['1200px', '1440px'];

const bp = {
    desktop: `@media screen and (min-width: ${breakpoints[1]})`,
    xl: `@media screen and (min-width: ${breakpoints[2]})`,
};

// eslint-disable-next-line
export default {
    breakpoints,
    colors,
    bp,
};
