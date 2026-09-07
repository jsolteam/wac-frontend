import styled from "styled-components";

export const BracketGroupStage = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    
    width: fit-content;
`;

export const CurrentStage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const NextStage = styled.div`
    margin-left: 60px;
`;

export const TopLine = styled.div`
    position: absolute;
    top: 62px;
    right: 262px;
    transform: translateY(-50%);
    width: 2px;
    height: 30px;
    background-color: white;
    z-index: 2;
`;

export const BottomLine = styled.div`
    position: absolute;
    top: 141px;
    right: 262px;
    transform: translateY(-50%);
    width: 2px;
    height: 30px;
    background-color: white;
    z-index: 2;
`;