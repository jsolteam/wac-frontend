import styled, {keyframes} from "styled-components";

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.span<{ size: number; colorMain: string; colorSecondary: string; }>`
    width: ${({size = 48}) => size}px;
    height: ${({size = 48}) => size}px;
    border-radius: 50%;
    display: inline-block;
    border-top: ${({size = 48, colorMain = "#fff"}) => `${size * 0.1}px solid ${colorMain}`};
    border-right: ${({size = 48}) => `${size * 0.1}px solid transparent`};
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
    position: relative;

    &::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: ${({size = 48}) => size}px;
        height: ${({size = 48}) => size}px;
        border-radius: 50%;
        border-left: ${({size = 48, colorSecondary = '#FF3D00'}) => `${size * 0.1}px solid ${colorSecondary}`};
        border-bottom: ${({size = 48}) => `${size * 0.1}px solid transparent`};
        animation: ${rotation} 0.5s linear infinite reverse;
    }
`;