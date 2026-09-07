import styled from "styled-components";
import {montserratAlternatesLight, montserratFamily700} from "../../../styles/fonts.ts";

export const BracketItem = styled.div<{lose: boolean}>`
    position: relative;
    display: inline-block;
    ${({ lose }) => lose && "filter: grayscale(100%)"};
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 1;
    
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TeamGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    
    margin-left: 10px;
    
    flex: 1;
`;

export const TeamLogo = styled.img`
    height: 30px;
    border-radius: 100%;
`;

export const TeamName = styled.span`
    ${montserratAlternatesLight};
    font-size: 15px;
    color: #fff;
`;

export const Score = styled.div`
    ${montserratFamily700};
    font-size: 24px;
    color: #000;
    
    width: 42px;
    height: 42px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-right: 2px;
`;

export const Line = styled.div<{position: "left" | "right"}>`
    position: absolute;
    top: 50%;
    ${(props) => (props.position === "left" ? "left: -20px;" : "right: -20px;")}
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background-color: white;
    z-index: 2;
`;