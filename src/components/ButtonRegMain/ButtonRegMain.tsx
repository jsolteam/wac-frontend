import * as Styles from "./ButtonRegMain.styles.ts";
import {useMediaQuery} from "react-responsive";

interface ButtonRegMainProps {
    children?: React.ReactNode;
}

export const ButtonRegMain = ({children}: ButtonRegMainProps) => {
    const isMobile = useMediaQuery({maxWidth: 700});

    const handleSubmit = () => {
        const section = document.getElementById('register');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Styles.ButtonRegMain>
            <Styles.SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398 116" width={isMobile ? "263" : "auto"} height={isMobile ? "58" : "auto"}>
                <foreignObject x="0" y="0" width="422" height="140">
                    <div
                        style={{
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)',
                            clipPath: 'url(#bgblur_0_52_67_clip_path)',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </foreignObject>
                <g filter="url(#filter0_d_52_67)">
                    <path
                        d="M35 18H363L380 35V81L363 98H35L18 81V35L35 18Z"
                        fill="#002850"
                        fillOpacity="0.21"
                        shapeRendering="crispEdges"
                    />
                    <path
                        d="M362.379 19.5L378.5 35.6211V80.3789L362.379 96.5H35.6211L19.5 80.3789V35.6211L35.6211 19.5H362.379Z"
                        stroke="#B0FCFF"
                        strokeWidth="3"
                        shapeRendering="crispEdges"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_52_67"
                        x="-12"
                        y="-12"
                        width="422"
                        height="140"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="9" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.690196 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_52_67"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_52_67"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="bgblur_0_52_67_clip_path">
                        <path d="M35 18H363L380 35V81L363 98H35L18 81V35L35 18Z" />
                    </clipPath>
                </defs>
            </Styles.SVG>
            <Styles.Content onClick={handleSubmit}>
                {children}
            </Styles.Content>
        </Styles.ButtonRegMain>
    );
};