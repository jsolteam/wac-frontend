import styled from "styled-components";

export const BracketLoseRound4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    width: fit-content;
    
    position: relative;
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 59px;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 59px;
`;

export const TopLine = styled.div`
    position: absolute;
    top: 233px;
    right: -40px;
    transform: translateY(-50%);
    width: 2px;
    height: 248px;
    background-color: white;
    z-index: 2;
`;