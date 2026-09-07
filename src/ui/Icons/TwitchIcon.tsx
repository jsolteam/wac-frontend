import type {IconsProps} from "./Icons.props.ts";
import {theme} from "../../styles/theme.ts";

type TwitchIconColor = 'purple' | 'white';
const COLOR_MAP_ICON: Record<NonNullable<TwitchIconProps['color']>, string> = {
    purple: theme.icons.colors.purple,
    white: theme.icons.colors.white,
};

interface TwitchIconProps extends IconsProps {
    color?: TwitchIconColor;
}

export const TwitchIcon = ({size = 32, color = 'white'}: TwitchIconProps) => {
    const fill = COLOR_MAP_ICON[color];

    return (
        <svg width={size} height={size} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_82_56)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.85079 0.383301L0.712402 5.84732L0.712402 28.181H8.31481V32.2203H12.5916L16.6309 28.181H22.8086L31.1247 19.8649V0.383301L2.85079 0.383301ZM28.2726 18.4402L23.521 23.1919H15.9185L11.8792 27.2312V23.1919H5.46407V3.23404H28.2726V18.4402ZM23.521 8.69939V17.0062H20.6702V8.69939H23.521ZM15.9185 8.69939V17.0062H13.0678V8.69939H15.9185Z"
                      fill={fill}/>
            </g>
            <defs>
                <clipPath id="clip0_82_56">
                    <rect width="31.837" height="31.837" fill="white" transform="translate(0 0.383301)"/>
                </clipPath>
            </defs>
        </svg>
    );
};