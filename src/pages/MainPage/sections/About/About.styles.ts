import styled from "styled-components";
import background from "../../../../assets/img/backgroundAbout.png";
import {
    montserratAlternatesMedium,
    montserratFamily400,
    tagesschriftCyrillicRegular
} from "../../../../styles/fonts.ts";

export const About = styled.section`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center top;

    display: flex;
    width: 100vw;
    height: auto;
`;

export const Content = styled.div`
    width: 100%;

    padding: 0 8px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1440px) {
        width: 1440px;
    }

    @media (max-width: 700px) {
        width: 100%;
        overflow: hidden;
        
        margin-top: 60px;
    }
`;

export const AboutBlock = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    position: relative;
`;

export const LogoAbout = styled.img`
    @media (max-width: 700px) {
        position: absolute;
        opacity: 0.1;
        height: 700px;
        top: -20%;
        left: -80%;
    }
`;

export const AboutBlockContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    max-width: 792px;
    
    z-index: 2;
`;

export const AboutDescription = styled.p`
    color: ${({theme}) => theme.text.colors.default};
    ${montserratFamily400};
    font-size: 15px;

    @media (max-width: 700px) {
        text-align: center;
    }
`;

export const RulesBlocks = styled.div`
    margin-top: 80px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RuleItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`;

export const RuleElementSelection = styled.span`
    color: ${({theme}) => theme.text.colors.bold};
`;

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 50px;

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        gap: 50px;
    }
`;

export const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    margin-top: 114px;

    @media (max-width: 700px) {
        margin-top: 50px;
    }
`;

export const RuleTitleBlock = styled.div`
    ${tagesschriftCyrillicRegular};
    font-size: 20px;
    
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;

    @media (max-width: 700px) {
        font-size: 17px;
    }
`;

export const RuleText = styled.div`
    ${montserratFamily400};
    font-size: 14px;
    
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    text-align: center;
    text-transform: uppercase;
    
    color: #BCC7FF;

    @media (max-width: 700px) {
        font-size: 13px;
    }
`;

export const RuleTextItem = styled.span``;

export const RuleIcon = styled.img`
    @media (max-width: 700px) {
        height: 42px;
        width: 42px;
    }
`;

export const HowPlayBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 158px;

    @media (max-width: 700px) {
        gap: 32px;
    }
    
`;

export const HowPlayIconsBlock = styled.div`
    width: 100%;
    display: flex;
    gap: 11px;
    align-items: center;
    justify-content: center;
    
    margin-top: 62px;
`;

export const HowPlayTitleBlock = styled.div`
    display: flex;
    justify-content: center;
    gap: 134px;
    
    margin-top: 20px;
`;

export const HowPlayLine = styled.img`
    width: 193px;
    height: 18px;
`;

export const HowPlayTitle = styled.span`
    width: 172px;
    
    ${montserratAlternatesMedium};
    font-size: 16px;
    
    color: #D0E8FF;
    text-transform: uppercase;
    text-align: center;

    text-shadow: 0 0 11px rgba(255, 255, 255, 0.9);
`;

export const HowPlayMobileBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 8px;
`;

