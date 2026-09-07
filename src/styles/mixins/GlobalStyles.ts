import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import tagesschriftCyrillic from "../../assets/fonts/TagesschriftCyrillic-Regular.ttf";
import {montserratFamily300} from "../fonts.ts";

export const GlobalStyles = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: "Tagesschrift Cyrillic";
        src: url(${tagesschriftCyrillic}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        ${montserratFamily300};
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    @keyframes comeIn {
        0% { transform: scale(0) }
        75% { transform: scale(1.03) }
        100% { transform: scale(1) }
    }

    .xmasonry .xblock {
        animation: comeIn ease 0.5s;
        animation-iteration-count: 1;
        transition: left .3s ease, top .3s ease;
    }
`;
