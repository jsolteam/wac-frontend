import styled from "styled-components";
import backgroundOther from "../../../../assets/img/backgroundOther.png";
import {montserratAlternatesRegular, montserratFamily400} from "../../../../styles/fonts.ts";

export const Schedule = styled.section`
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

    @media (min-width: 1440px) {
        width: 1440px;
    }

    @media (max-width: 700px) {
        width: 100%;
        overflow: hidden;
        padding: 0;

        margin-top: 60px;
    }
`;

export const DayBlock = styled.div`
    margin-top: 64px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`;

export const TextDayBlock = styled.span`
    ${montserratAlternatesRegular};
    font-size: 20px;
    color: ${({theme}) => theme.text.colors.default};
    
    display: flex;
    gap: 8px;
`;

export const SelectionDayBlock = styled.span`
    color: ${({theme}) => theme.text.colors.bold};
`;

export const DayContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    gap: 48px 64px;
    justify-items: center;

    @media (max-width: 1199px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }

    @media (max-width: 699px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    @media (max-width: 470px) {
        grid-template-columns: 1fr;
        gap: 32px;
    }
`;

export const SubtitleBlock = styled.div`
    ${montserratFamily400};
    font-style: italic;
    
    color: #A3A3A3;
    
    margin-top: 100px;
    
    max-width: 700px;
    text-align: center;
`;

export const SubtitleSelection = styled.span`
    color: #B36565;
`;