import styled from "styled-components";
import backgroundOther from "../../../../assets/img/backgroundOther.png";
import {
    montserratAlternatesRegular,
    montserratFamily500
} from "../../../../styles/fonts.ts";

export const Bracket = styled.section`
    display: flex;
    width: 100vw;
    height: auto;
    flex-direction: column;
    gap: 56px;

    background-image: url(${backgroundOther});
    background-size: 1920px 1080px;
    background-repeat: no-repeat;
    background-position: center top;

    position: relative;

    overflow: hidden;
`;

export const Content = styled.div`
    width: 100%;

    padding: 0 8px;

    margin: 110px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 1440px;
`;

export const BracketContent = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 32px;
`;

export const TopBracket = styled.div`
    scale: 0.98;
    
    width: 1440px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1440px) {
        overflow: auto;
    }
`;

export const BottomBracket = styled.div`
    scale: 0.81;
`;

export const BracketName = styled.span`
    color: ${({theme}) => theme.text.colors.mainTitle};
    ${montserratFamily500};
    flex: 1;
    text-align: center;
    font-size: 30px;
    
    margin-bottom: 32px;
`;

export const BracketStageBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 32px;

    @media (max-width: 1440px) {
        width: 1440px;
    }
`;

export const BracketStageName = styled.h2`
    color: ${({theme}) => theme.text.colors.subtitle};
    ${montserratAlternatesRegular};
    flex: 1;
    text-align: center;
    font-size: 20px;
`;