import styled from "styled-components";
import {montserratFamily600} from "../../styles/fonts.ts";

export const ButtonSendFeedback = styled.div`
    position: relative;

    margin: 0;

    width: 467px;
    height: 60px;

    cursor: pointer;
    user-select: none;

    &:hover {
        opacity: 0.7;
    };

    &:active {
        opacity: 1;
    }

    @media (max-width: 700px) {
        width: 264px;
        height: 58px;
    }
`;

export const SVG = styled.svg`
    fill: none;

    position: absolute;
    top: 0;
    left: 0;

    @media (max-width: 700px) {
        transform: scale(1.1);
        transform-origin: center center;
    }
`;

export const Content = styled.span`
    ${montserratFamily600};
    font-size: 24px;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: #A1DFFA;
    background: linear-gradient(to bottom right, #A1DFFA 39%, #027DB4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;