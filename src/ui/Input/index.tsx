import * as Styles from "./Input.styles.ts";
import type {ChangeEvent, FC} from "react";
import {theme} from "../../styles/theme.ts";

interface InputProps {
    width?: number;
    height?: number;
    padding?: number;
    placeholder?: string;
    required?: boolean;
    area?: boolean;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    disabled?: boolean;
}

export const Input: FC<InputProps> = ({
                                          width = 456,
                                          height = 172,
                                          padding = 14,
                                          placeholder = "",
                                          required = false,
                                          area = false,
                                          name,
                                          onChange,
                                          disabled = false,
                                      }) => {
    const borderRadius = 10;
    const strokeWidth = 3;

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

    const strokeColor = required ? theme.inputs.colors.required : theme.inputs.colors.optionally;

    const commonProps = {
        padding,
        placeholder,
        name,
        onChange,
        disabled,
    };

    return (
        <Styles.Wrapper width={width} height={height} disabled={disabled}>
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path d={path} fill="rgba(2, 65, 83, 0.01)"/>
                    <path d={path} stroke={strokeColor} strokeWidth={strokeWidth} fill="none"/>
                </g>
            </svg>

            {area ? (
                <Styles.TextArea {...commonProps} />
            ) : (
                <Styles.InputField {...commonProps} />
            )}
        </Styles.Wrapper>
    );
};
