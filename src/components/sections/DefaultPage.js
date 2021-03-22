import logo from '../../logo512.png';
import styled from 'styled-components/macro';

const AppLol = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(50px + 2vmin);
    text-transform: uppercase;
    color: black;
`;

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 40s linear;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const AppLink = styled.a`
    color: #61dafb;
    font-family: 'Montserrat-Italic';
    font-weight: 200;
    transition: 0.25s;

    &:hover {
        font-weight: 800;
    }
`;

const Default = () => {
    return (
        <AppLol>
            <AppHeader>
                <AppLogo src={logo} alt="logo" />
                <p>mario time mario time mario time</p>
                <AppLink
                    href="https://youtu.be/gDcPJqnrn44"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn mario time
                </AppLink>
            </AppHeader>
        </AppLol>
    );
};

export default Default;
