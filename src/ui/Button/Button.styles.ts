import styled from "styled-components";
import { Typography } from "../../styles/typography";


export const Button = styled.button`
    ${Typography.p1};
    text-transform: uppercase;

    color: ${({theme}) => theme.colors.frenchPass};

    background: transparent;

    backdrop-filter: blur(30px);

    padding: 25px 22px;

    width: fit-content;

    border: 3px ${({theme}) => theme.colors.frenchPass} solid;

    box-shadow: 0 0 18px ${({theme}) => theme.colors.frenchPass};
`