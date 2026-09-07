import styled, {keyframes} from "styled-components";
import backgroundMain from "../../../../assets/img/backgroundMain.png";
import {Typography} from "../../../../styles/typography.ts";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Main = styled.section`
    display: flex;
    width: 100%;
    height: 1080px;

    background-image: url(${backgroundMain});
    background-repeat: no-repeat;
    background-size: 1920px 1080px;
    background-position: center top;

    opacity: 0;
    animation: ${fadeIn} 1.4s ease-out forwards;
    
    overflow: hidden;

    @media (max-width: 700px) {
        height: 956px;
        background-position: 78% 70%;
    }
`;


export const Content = styled.div`
    height: 1024px;
    width: 100%;
    padding: 0 8px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    

    @media (min-width: 1440px) {
        width: 1440px;
    }

    @media (max-width: 700px) {
        height: 956px;
        width: 100%;
        overflow: hidden;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    bottom: -6%;
    right: -16%;

    opacity: 0;
    animation: ${slideInFromRight} 1.4s ease-out 0.6s forwards;

    @media (max-width: 700px) {
        height: 654px;
        right: -40%;
        opacity: 0.68;
        
        animation: none;
    }
`;

export const Logo = styled.img`
    margin-top: 8%;

    opacity: 0;
    animation: ${zoomIn} 1.1s ease-out 1.3s forwards;

    @media (max-width: 700px) {
        height: 252px;
        margin-top: 12%;
    }
`;

export const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 80px;
    margin-bottom: 110px;
    gap: 40px;

    opacity: 0;
    animation: ${slideInFromBottom} 1s ease-out 2s forwards;

    z-index: 10;

    @media (max-width: 700px) {
        margin-bottom: 200px;
    }
`;

export const Title = styled.h1`
    ${Typography.mainTitle};

    color: ${({theme}) => theme.text.colors.mainTitle};
    
    text-align: center;

    text-shadow: 0 0 3px rgba(255, 255, 255, 0.68);

    @media (max-width: 700px) {
        font-size: 28px;
    }
`;

export const SubTitle = styled.h4`
    ${Typography.subtitle};

    color: ${({theme}) => theme.text.colors.subtitle};
`;

export const TopBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const UserBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Avatar = styled.img`
    width: 63px;
    height: 63px;
    border-radius: 50%;

    @media (max-width: 700px) {
        width: 53px;
        height: 53px;
    }
`;

export const Name = styled.span`
    ${Typography.twitchName};
    color: ${({theme}) => theme.text.colors.default};

    @media (max-width: 700px) {
        font-size: 24px;
    }
`;

export const BottomBlock = styled.div`
    opacity: 0;
    animation: ${slideInFromBottom} 1s ease-out 3s forwards;
`;
