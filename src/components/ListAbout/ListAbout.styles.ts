import styled from "styled-components";
import {montserratFamily400, tagesschriftCyrillicRegular} from "../../styles/fonts.ts";

export const ListAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100%;
`;

export const Item = styled.span`
    ${tagesschriftCyrillicRegular};
    font-size: 15px;
    color: ${({theme}) => theme.text.colors.default};

    @media (max-width: 700px) {
        font-size: 14px;
    }
`;

export const Key = styled.span`
    font-size: 14px;
    color: ${({theme}) => theme.text.colors.bold};

    @media (max-width: 700px) {
        font-size: 13px;
    }
`;

export const Value = styled.span``;