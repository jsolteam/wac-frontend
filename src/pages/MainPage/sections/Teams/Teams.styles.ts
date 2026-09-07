import styled from "styled-components";
import backgroundOther from "../../../../assets/img/backgroundOther.png";
import {
    montserratAlternatesRegular,
    montserratFamily200,
    tagesschriftCyrillicRegular
} from "../../../../styles/fonts.ts";

export const Teams = styled.section`
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

    padding: 0 16px;

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

export const TeamBlock = styled.div`
    margin-top: 64px;
    width: 100%;
`;

export const TeamTitle = styled.span`
    ${montserratAlternatesRegular};
    font-size: 32px;
    color: ${({theme}) => theme.text.colors.default};
    
    display: flex;
    gap: 8px;
    align-items: center;
    
    width: 100%;

    @media (max-width: 700px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const TeamName = styled.span`
    ${tagesschriftCyrillicRegular};
    color: ${({theme}) => theme.text.colors.mainTitle};
`;

export const TeamContent = styled.div`
    margin-top: 48px;
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 164px;

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const LeftBlock = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
`;

export const RightBlock = styled.div`
    flex: 1;
`;

export const MembersBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    justify-items: start;
    gap: 51px;

    @media (max-width: 1199px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }
    
`;

export const SubstituteBlock = styled.div`
    margin-top: 64px;
    
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

export const SubstituteHeader = styled.span`
    ${montserratFamily200};
    font-size: 20px;
    color: #CFCFCF;
`;

export const MemberBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 16px;
`;

export const MemberAvatar = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`;

export const MemberName = styled.span`
    ${tagesschriftCyrillicRegular};
    font-size: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TeamLogoBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TeamLogo = styled.img`
    height: 200px;
`;

export const CaptainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`;

export const CaptainHeader = styled.span`
    ${montserratFamily200};
    font-size: 20px;
    color: ${({theme}) => theme.text.colors.default};
`;

export const CaptainBox = styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CaptainPhoto = styled.img`
    position: absolute;
    
    height: 280px;
    bottom: 2%;
    
    z-index: 10;
`;

export const CaptainName = styled.span`
    position: absolute;
    
    bottom: 5%;
    
    ${tagesschriftCyrillicRegular};
    font-size: 32px;
    color: ${({theme}) => theme.text.colors.mainTitle};
    text-shadow: 0 1px 23px #000;
    
    z-index: 100;
`;

export const Line = styled.hr`
    margin: 64px 0;
`;