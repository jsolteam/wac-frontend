import styled from "styled-components";
import {Typography} from "../../styles/typography.ts";

export const SocialBlock = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 14px;
    
    z-index: 10;
`;

export const Title = styled.span`
    ${Typography.caption};
    color: ${({ theme }) => theme.text.colors.subtitle};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const SocialButton = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 100%;

    border: 1px solid #002750;
    box-shadow: 0 0 18px 0 rgba(176, 252, 255, 0.25);

    background-color: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(18px);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
;

    &:active {
        opacity: 1;
    }

    @media (max-width: 700px) {
        width: 34px;
        height: 34px;
    }
`;