import styled from "styled-components";
import {Typography} from "../../styles/typography.ts";

export const TitleSection = styled.h1`
    ${Typography.title};
    color: ${({theme}) => theme.text.colors.title};
    text-transform: uppercase;

    @media (max-width: 700px) {
        font-size: 24px;
    }
`;