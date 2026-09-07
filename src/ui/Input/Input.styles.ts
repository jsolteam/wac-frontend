import styled, {css} from "styled-components";
import {Typography} from "../../styles/typography.ts";

const sharedStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    ${Typography.input};
    color: ${({theme}) => theme.inputs.colors.text};
    background: none;
    border: none;

    clip-path: polygon(
            12px 0%,
            calc(100% - 12px) 0%,
            100% 12px,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            12px 100%,
            0% calc(100% - 12px),
            0% 12px
    );

    &::placeholder {
        ${Typography.placeholder};
        color: ${({theme}) => theme.inputs.colors.placeholder};
        text-transform: uppercase;
    }
`;

export const Wrapper = styled.div<{ width: number; height: number; disabled: boolean; }>`
    position: relative;
    display: inline-block;

    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    filter: ${({disabled}) => (disabled ? "brightness(0.5) grayscale(100%)" : "none")};
`;

export const InputField = styled.input<{ padding: number; }>`
    ${sharedStyles};
    padding: ${({ padding }) => padding}px;
`;

export const TextArea = styled.textarea<{ padding: number; }>`
    ${sharedStyles};
    padding: ${({ padding }) => padding}px;
    
    resize: none;
`;
