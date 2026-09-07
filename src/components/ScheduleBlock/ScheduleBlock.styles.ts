import styled from "styled-components";
import {montserratFamily500} from "../../styles/fonts.ts";

export const ScheduleBlock = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const SVG = styled.svg`
   
`;


export const Description = styled.div`
    ${montserratFamily500};
    font-size: 16px;
    color: #A9DEFF;
    
    text-align: center;
`;