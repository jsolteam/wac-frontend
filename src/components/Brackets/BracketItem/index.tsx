import * as Styles from "./BracketItem.stylex.ts";

interface BracketItemProps {
    avatar?: string;
    title?: string;
    score?: number;
    double?: boolean;
    position?: "left" | "right";
    lose?: boolean;
}

export const BracketItem = ({avatar, title, score, double = false, position = "right", lose = false}: BracketItemProps) => {
    return (
        <Styles.BracketItem lose={lose}>
            <Styles.Line position={position} />
            {double && <Styles.Line position="left"/>}

            <svg width="242" height="42" viewBox="0 0 242 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-23.4" y="-23.4" width="288.433" height="88.8"><div style={{backdropFilter: "blur(11.7px)", clipPath: "url(#bgblur_0_536_2_clip_path)", height: "100%", width: "100%"}}></div></foreignObject><g filter="url(#filter0_i_536_2)" data-figma-bg-blur-radius="23.4">
                <path d="M8.30036 0H233.332L241.633 8.4V33.6L233.332 42H8.30036L0 33.6V8.4L8.30036 0Z" fill="black" fill-opacity="0.12"/>
                <path d="M232.706 1.5L240.133 9.01562V32.9834L232.706 40.5H8.92676L1.5 32.9834V9.01562L8.92676 1.5H232.706Z" stroke="#ABD4FE" stroke-width="3"/>
            </g>
                <g filter="url(#filter1_i_536_2)">
                    <path d="M233.414 0H198.895V42H233.414L241.633 33.9231V8.07692L233.414 0Z" fill="#88B3DF"/>
                </g>
                <path d="M200.395 1.5V40.5H232.8L240.133 33.2939V8.70508L232.8 1.5H200.395Z" stroke="#ABD4FE" stroke-width="3"/>
                <defs>
                    <filter id="filter0_i_536_2" x="-23.4" y="-23.4" width="288.433" height="88.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="54.6"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.83 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_536_2"/>
                    </filter>
                    <clipPath id="bgblur_0_536_2_clip_path" transform="translate(23.4 23.4)"><path d="M8.30036 0H233.332L241.633 8.4V33.6L233.332 42H8.30036L0 33.6V8.4L8.30036 0Z"/>
                    </clipPath><filter id="filter1_i_536_2" x="198.895" y="0" width="42.7378" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_536_2"/>
                </filter>
                </defs>
            </svg>

            <Styles.Content>
                <Styles.TeamGroup>
                    <Styles.TeamLogo src={avatar} />
                    <Styles.TeamName>{title}</Styles.TeamName>
                </Styles.TeamGroup>
                <Styles.Score>{score}</Styles.Score>
            </Styles.Content>
        </Styles.BracketItem>
    );
};