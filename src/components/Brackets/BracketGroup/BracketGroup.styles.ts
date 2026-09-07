import styled from "styled-components";

export const BracketGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px; 
    
    position: relative;
`;

export const Line = styled.div<{position: "left" | "right"}>`
    position: absolute;
    top: 50%;
    ${(props) => (props.position === "left" ? "left: -20px;" : "right: -20px;")}
    transform: translateY(-50%);
    width: 2px;
    height: 48px;
    background-color: white;
    z-index: 2;
`;

export const LineNext = styled.div<{position: "left" | "right"}>`
    position: absolute;
    top: 50%;
    ${(props) => (props.position === "left" ? "left: -40px;" : "right: -40px;")}
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background-color: white;
    z-index: 2;
`;

