import * as Styles from "./ButtonSendFeedback.styles.ts";
import type {ReactNode} from "react";
import {useMediaQuery} from "react-responsive";

interface ButtonSendFeedbackProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const ButtonSendFeedback = ({children, onClick, disabled}: ButtonSendFeedbackProps) => {
    const disColor = disabled ? "brightness(0.5) grayscale(100%)" : "none";
    const isMobile = useMediaQuery({maxWidth: 700});

    return (
        <Styles.ButtonSendFeedback style={{filter: disColor}}>
            <Styles.SVG width={isMobile ? "263" : "auto"} height={isMobile ? "58" : "auto"} viewBox="0 0 467 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-30" y="-30" width="527" height="120">
                    <div
                        style={{
                            backdropFilter: "blur(15px)",
                            clipPath: "url(#bgblur_0_358_2_clip_path)",
                            height: "100%",
                            width: "100%"
                        }}></div>
                </foreignObject>
                <path data-figma-bg-blur-radius="30"
                      d="M453.586 1.5L465.5 10.7344V49.2646L453.586 58.5H13.4141L1.5 49.2646V10.7344L13.4141 1.5H453.586Z"
                      fill="#002850" fill-opacity="0.21" stroke="#027DB4" stroke-width="3"/>
                <defs>
                    <clipPath id="bgblur_0_358_2_clip_path" transform="translate(30 30)">
                        <path
                            d="M453.586 1.5L465.5 10.7344V49.2646L453.586 58.5H13.4141L1.5 49.2646V10.7344L13.4141 1.5H453.586Z"/>
                    </clipPath>
                </defs>
            </Styles.SVG>
            <Styles.Content onClick={!disabled ? onClick : undefined}>
                {children}
            </Styles.Content>
        </Styles.ButtonSendFeedback>
    );
};