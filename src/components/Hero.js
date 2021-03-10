import styled from 'styled-components';
import heroBackground from '../images/hero-background.webp';
import heroLogo from '../images/hero-logo.webp';

const Wrapper = styled.div`
    width: 100%;
    height: 1024px;
    background: #ff0000;
    text-align: center;
    color: #ffffff;
`;

const Icons = styled.div`
    height: 100%;
    background: no-repeat url(${heroBackground});
    background-position: top;
    z-index: -100;
`;

const Logo = styled.div`
    height: 50%;
    background: no-repeat url(${heroLogo});
    background-position: 50% 30%;
`;

const InfoWrapper = styled.div`
    height: 500px;
`;

const Date = styled.h2`
    font-weight: 700;
    font-size: 30px;
`;
const Span = styled.span`
    font-weight: 300;
    font-style: italic;
`;

const Name = styled.h2`
    font-weight: 300;
    font-size: 40px;
`;

const Bold = styled.b`
    font-weight: 700;
    font-size: 46px;
`;

const Button = styled.button`
    background: #ffc901;
    width: 380px;
    height: 120px;
    margin-top: 15px;
    transition: 200ms;
    font-family: inherit;
    font-weight: 700;
    font-size: 38px;
    outline: none;
    border: 4px solid black;
    border-radius: 10px;
    cursor: pointer;
    /* box-sizing: content-box; */
    /* z-index: 1000; */

    &::before {
        /* content: 'JOIN'; */
        /* box-sizing: border-box; */
        /* position: relative; */
        /* border: 4px solid black; */
        /* background: tomato; */
        /* z-index: 1; */
        /* margin: 10px 10px; */
        /* padding: calc(120px / 2) calc(380px / 2); */
        /* margin: calc(120px / 2) calc(380px / 2); */
        /* padding: 100px 50px; */
        /* height: 8%; */
        /* margin: -3% -5%; */
        /* width: 14%; */
    }
    /* -webkit-user-select: none; */
    /* -moz-user-select: none; */
    /* width: 50px; */
    /* height: 50px; */
    /* background: transparent; */

    &:hover {
        background: #e2b200;
    }
`;

const ButtonText = styled.p`
    font-weight: 700;
    font-size: 46px;
`;

const Hero = () => {
    return (
        <Wrapper>
            <Icons>
                <Logo />
                <InfoWrapper>
                    <Date>
                        EVENT 2021 <Span>APR 27 - JUNE 2</Span>
                    </Date>
                    <Name>
                        NEW <Bold>SUPER MARIO 3D</Bold> WORLD
                    </Name>
                    <Button>JOIN EVENT</Button>
                </InfoWrapper>
            </Icons>
        </Wrapper>
    );
};

export default Hero;
