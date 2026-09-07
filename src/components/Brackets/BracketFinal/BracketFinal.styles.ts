import styled from "styled-components";

export const BracketFinal = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    position: relative;

    width: fit-content;
`;

export const NextStage = styled.div`
    margin-left: 30px;
`;

export const CurrentStage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const TopLine = styled.div`
    position: absolute;
    top: 310px;
    right: 262px;
    transform: translateY(-50%);
    width: 2px;
    height: 194px;
    background-color: white;
    z-index: 2;
`;

export const BottomLine = styled.div`
    position: absolute;
    top: 554px;
    right: 262px;
    transform: translateY(-50%);
    width: 2px;
    height: 194px;
    background-color: white;
    z-index: 2;
`;