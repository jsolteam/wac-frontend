import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { montserratFamily400 } from "../fonts";

export const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        background-color: ${({ theme }) => theme.colors.blueCharcoal};
        ${montserratFamily400};
        color: ${({ theme }) => theme.colors.white};;
    }

    #root {
        display: flex;
        flex-direction: column;



    }
`;
