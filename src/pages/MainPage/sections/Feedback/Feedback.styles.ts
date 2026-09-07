import styled from "styled-components";
import backgroundOther from "../../../../assets/img/backgroundOther.png";

export const Feedback = styled.section`
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

        margin-top: 60px;
    }
`;

export const MainBox = styled.div`
    margin-top: 8px;
    
    display: flex;
    align-items: center;
    gap: 174px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const TextForm = styled.p`

    font-size: 15px;
    color: #E9E9E9;
    text-align: center;
    //width: 467px;
    z-index: 10;
    margin-bottom: 30px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const Img = styled.img`
    @media (max-width: 700px) {
        position: absolute;
        width: 600px;
        
        top: 20%;
        right: 0;
        
        opacity: 0.2;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    
    z-index: 100;
`;

export const TelegramBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Text = styled.span`
    color: #686868;

    font-size: 11px;
    font-style: italic;
    margin-left: 16px;
`;

export const Footer = styled.div`
    background-color: #000710;
    width: 100%;
    height: 208px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    z-index: 1000;

    @media (max-width: 700px) {
        height: auto;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 70%;
    max-width: 1920px;

    @media (max-width: 700px) {
        width: 100%;
        
        flex-direction: column;
        justify-content: center;
        
        gap: 32px;
    }
`;

export const FooterBlock = styled.div`
    display: flex;
    gap: 85px;

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 32px;
        align-items: center;
        
        margin-top: 16px;
    }
`;

export const LinksBlock = styled.div`
    text-transform: uppercase;

    
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 700px) {
       align-items: center;
    }
`;

export const TitleLink = styled.span`
    color: #B9B9B9;
    font-size: 15px;
`;

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: 16px;

    @media (max-width: 700px) {
        margin-left: 0;
        align-items: center;
    }
`;

export const Success = styled.p`
    color: #3cc60e;

    text-align: center;
`;

export const ErrorMessage = styled.span`

    color: #b30d0d;
    font-size: 13px;
    text-align: center;
`;

export const Link = styled.a`
    color: #B3E6FF;
    font-size: 11px;
    cursor: pointer;
    user-select: none;
    
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    };

    &:active {
        opacity: 1;
    }
`;

export const CreatorBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const CreatorText = styled.span`
    color: #616161;
    font-size: 16px;

`;

export const CreatorLogo = styled.img``;