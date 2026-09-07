import styled from "styled-components";
import {Typography} from "../../styles/typography.ts";

export const ButtonRegMain = styled.div`
    position: relative;
    
    margin: 0;

    width: 398px;
    height: 116px;

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
        transform: scale(1.3);
        transform-origin: center center;
    }
`;

export const Content = styled.span`
    ${Typography.button};
    
    position: absolute;
    
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: #B0FCFF;
    background: linear-gradient(to bottom right, #B0FCFF 39%, #27D6DD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-transform: uppercase;

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;