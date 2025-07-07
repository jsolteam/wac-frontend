import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};

    body {
        background-color: ${({ theme }) => theme.colors.blueCharcoal};

    }

    #root {
        display: flex;
        flex-direction: column;



    }
`;
