import styled from "styled-components";
import {Typography} from "../../styles/typography";

export const Caption = styled.p`
    position: relative;
    margin-top: auto;
    padding-bottom: 15px;

    ${Typography.caption};
    color: ${({theme}) => theme.text.colors.caption};
    text-transform: uppercase;
`;

export const CaptionArrow = styled.span`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: block;
    line-height: 1;
    color: ${({theme}) => theme.text.colors.caption};
`;
