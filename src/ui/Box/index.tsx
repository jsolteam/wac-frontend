import * as Styles from "./Box.styles";
import type {ReactNode, CSSProperties} from "react";

const STROKE_WIDTH = 3;

interface BoxProps {
    width?: number;
    height?: number;
    padding?: number;
    borderRadius?: number;
    children?: ReactNode;
}

export const Box = ({
                        width = 456,
                        height = 172,
                        padding = 16,
                        borderRadius = 15,  
                        children,
                    }: BoxProps) => {
    const path = `
    M${borderRadius} 0
    H${width - borderRadius}
    L${width} ${borderRadius}
    V${height - borderRadius}
    L${width - borderRadius} ${height}
    H${borderRadius}
    L0 ${height - borderRadius}
    V${borderRadius}
    L${borderRadius} 0
    Z
  `;

    const style: CSSProperties = {width, height};

    return (
        <Styles.Box style={style}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path d={path} fill="rgba(0, 0, 0, 0.12)"/>
                    <path d={path} stroke="#074686" strokeWidth={STROKE_WIDTH} fill="none"/>
                </g>
            </svg>
            <Styles.Content padding={padding}>
                {children}
            </Styles.Content>
        </Styles.Box>
    );
};
