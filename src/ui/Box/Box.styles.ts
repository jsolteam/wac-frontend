import styled from "styled-components";

export const Box = styled.div`
    position: relative;
    display: inline-block;
`;

export const Content = styled.div<{ padding: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 1;

    color: ${({theme}) => theme.text.colors.default};
    box-shadow: inset 0 0 110px rgba(0, 0, 0, 0.83);
    padding: ${({ padding }) => `${padding}px`};

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
`;
