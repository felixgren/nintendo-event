import React, { useRef } from 'react';
import styled from 'styled-components/macro';
// import heroBackground from '../../images/hero-background.webp';
import heroIcon1 from '../../images/hero/icon7.png';
import evilHeroIcon1 from '../../images/hero/icon6.png';
import evilHeroBackground from '../../images/bowser/hero-evilbackground.webp';
import heroLogo from '../../images/hero-logo.webp';
import evilLogo from '../../images/bowser/bowser-logo.webp';
import Button from '../Button';
import EventTitle from '../EventTitle';
import Text from '../Text';
import theme from '../../utils/theme';
import { useBowser } from './BowserContext';

const Wrapper = styled.div`
    /* background: ${(props) => `${props.isEvil ? '#000000' : '#ff0000'}`}; */
    position: relative;
    background: transparent;
    width: 100%;
    height: 100vh;
    max-height: 667px;
    text-align: center;

    ${theme.bp.desktop} {
        height: 1024px;
        max-height: unset;
    }
`;

const Grid = styled.div`
    position: absolute;
    z-index: -1;
    display: grid;
    /* minmax(300px, auto) */
    /* align-items: center; */
    grid-template-columns: repeat(8, auto);
    grid-template-rows: repeat(8, auto);
    width: 100%;
    height: 100%;
    background: blue;
`;

// const GridWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, auto);
//     /* grid-template-rows: 25% 100px auto; */
//     width: 100%;
//     height: 100vh;
//     max-height: 667px;
//     background: ${(props) => `${props.isEvil ? '#000000' : '#ff0000'}`};
//     text-align: center;

//     ${theme.bp.desktop} {
//         height: 1024px;
//         max-height: unset;
//     }
// `;

const Content = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) =>
        `url(${props.isEvil ? evilHeroIcon1 : heroIcon1})`};
    background-position: top;
    background-position: 50% 110%;
    background-size: 190% auto;

    ${theme.bp.desktop} {
        background-position: 50% 50%;
        background-size: unset;
    }
`;

const Logo = styled.div`
    width: 100%;
    height: 342px;
    background: ${(props) =>
        `no-repeat url(${props.isEvil ? evilLogo : heroLogo})`};
    background-position: 50% 100%;
    background-size: 84% auto;

    ${theme.bp.desktop} {
        height: 540px;
        background-size: 600px auto;
    }
`;

const InfoWrapper = styled.div`
    width: auto;
    max-width: 700px;
    padding: 14px 24px 0;
    margin: auto;
    height: 130px;

    ${(props) =>
        props.isEvil
            ? `
            background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 52.08%, rgba(0, 0, 0, 0) 100%);
            `
            : `
            background: linear-gradient(270deg, rgba(255, 0, 0, 0) 0%, #ff0000 52.08%, rgba(255, 0, 0, 0) 100%);
    `};

    ${theme.bp.desktop} {
        padding: 20px 24px;
    }
`;

const StyledText = styled(Text)`
    &::first-letter {
        text-transform: capitalize;
    }
`;

const ButtonWrapper = styled.div``;

const InviteText = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const country = params.get('country');

    return (
        <StyledText
            color="white"
            fontSize={['16px', '24px']}
            textAlign="center"
            fontFamily="Montserrat-Italic"
        >
            {name && `${name}!`} You are invited to travel{' '}
            {country ? `from ${country} to ???????? to` : 'to ???????? and'} participate
            in...
        </StyledText>
    );
};

const Hero = ({ setPopupState }) => {
    const isEvil = useBowser();
    const GridRef = useRef(null);

    // this is TRULY amazing
    const gridStyles = Grid.componentStyle.rules[0];
    const splitStyles = gridStyles.split(';');

    const digitRegex = /\d+/;
    const gridRowCount = parseInt(splitStyles[3].match(digitRegex));
    const gridColCount = parseInt(splitStyles[4].match(digitRegex));

    console.log(`${gridRowCount} rows haHAAaaa`);
    console.log(`${gridColCount} cols`);

    // const gridRowCount = splitStyles[4].split(':');
    // const gridColumnCount = splitStyles[3].split(':');

    // const lmaoRow = gridRowCount[1].match(/\d+/)[0];
    // const lmaoCol = gridColumnCount[1].match(/\d+/)[0];

    // console.log(`${lmaoRow} rows haHAAaaa`);
    // console.log(`${lmaoCol} columns`);

    console.log(Grid);
    console.log(splitStyles);
    console.log(gridRowCount);
    console.log(gridColCount);

    // test = gridStyles.split();
    // console.log(test);

    // console.log(GridRef);
    // console.log(window.GridRef);
    // console.log(GridRef.div)
    // console.log(window.getComputedStyle(Grid));

    // console.log(window.getComputedStyle(Grid));
    return (
        <Wrapper isEvil={isEvil}>
            <Grid ref={GridRef} />
            <Content isEvil={isEvil}>
                <Logo isEvil={isEvil} />
                <InfoWrapper isEvil={isEvil}>
                    <InviteText />
                    <EventTitle
                        fontFamily={isEvil ? 'NewRocker' : 'Montserrat-Italic'}
                        color="white"
                        textAlign="center"
                        m="6px 0 20px"
                        fontSize={['28px', '34px']}
                    />
                    <ButtonWrapper onClick={() => setPopupState(true)}>
                        <Button isHero isBlue isEvil={isEvil} />
                    </ButtonWrapper>
                </InfoWrapper>
            </Content>
        </Wrapper>
    );
};

export default Hero;
