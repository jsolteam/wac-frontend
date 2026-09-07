import styled from "styled-components";
import {montserratFamily300} from "../../styles/fonts.ts";

export const CreatorBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const CreatorText = styled.span`
    ${montserratFamily300};
    font-size: 16px;
    
    color: ${({theme}) => theme.text.colors.creator};
`;

export const CreatorLogo = styled.img`
    width: 91px;
    height: 24px;
`;