import styled from "styled-components";

export const BracketLoseRound2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    width: fit-content;
    
    position: relative;
`;

export const Top = styled.div`
    display: flex;
    gap: 59px;
`;

export const Bottom = styled.div`
    display: flex;
    gap: 59px;
`;

export const TopLine = styled.div`
    position: absolute;
    top: 65px;
    right: -40px;
    transform: translateY(-50%);
    width: 2px;
    height: 37px;
    background-color: white;
    z-index: 2;
`;

export const BottomLine = styled.div`
    position: absolute;
    top: 152px;
    right: -40px;
    transform: translateY(-50%);
    width: 2px;
    height: 37px;
    background-color: white;
    z-index: 2;
`;