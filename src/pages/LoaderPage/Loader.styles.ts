import styled, {css} from "styled-components";

import {montserratAlternatesLight, montserratAlternatesMedium, montserratFamily300} from "../../styles/fonts.ts";

const fadeOut = css`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
`;

export const LoaderPage = styled.div<{isVisible: boolean;}>`
    position: fixed;
    z-index: 1000;
    inset: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: opacity 0.5s ease;
    ${({isVisible}) => isVisible && fadeOut};
    
    background-color: ${({theme}) => theme.colors.background};
`;

export const Content = styled.div`
    height: 80%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 700px) {
        height: 70%;
    }
`;

export const Logo = styled.img`
    width: 269px;
    height: 268px;

    margin-bottom: 32px;

    @media (max-width: 700px) {
        width: 185px;
        height: 185px;

        margin-bottom: 39px;
    }
`;

export const LoadingBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 64px;
`;

export const LoadingText = styled.span`
    ${montserratAlternatesLight};
    color: ${({theme}) => theme.text.colors.subtitle};
    font-size: 24px;

    margin-bottom: 44px;

    @media (max-width: 700px) {
        font-size: 16px;

        margin-bottom: 24px;
    }
`;

export const ErrorTextTitle = styled.span`
    ${montserratAlternatesMedium};
    color: ${({theme}) => theme.text.colors.error};
    font-size: 24px;

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;

export const ErrorTextSubtitle = styled.span`
    ${montserratFamily300};
    color: ${({theme}) => theme.text.colors.subtitle};
    font-size: 16px;
    
    margin-top: 8px;

    @media (max-width: 700px) {
        font-size: 12px;
        
        margin-top: 3px;
    }
`;