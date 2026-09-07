import type {IconsProps} from "./Icons.props.ts";

export const TelegramIcon = ({size = 25}: IconsProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_57_29)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.6013 4.61441C21.7346 4.13725 22.9495 5.09551 22.7493 6.30873L20.3859 20.6386C20.158 22.0203 18.6405 22.8131 17.3729 22.1246C16.3122 21.5484 14.7384 20.6617 13.3201 19.7349C12.6119 19.2721 10.4432 17.7881 10.7098 16.7318C10.9377 15.8285 14.5834 12.4349 16.6667 10.4167C17.4851 9.62388 17.1124 9.16589 16.1459 9.89582C13.7484 11.7066 9.89927 14.4596 8.62639 15.2344C7.50334 15.9179 6.91696 16.0346 6.21754 15.9179C4.94032 15.7051 3.75618 15.3755 2.78943 14.9748C1.4828 14.4331 1.54644 12.6375 2.78855 12.1146L20.6013 4.61441Z"
                      fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_57_29">
                    <rect width="25" height="25" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};