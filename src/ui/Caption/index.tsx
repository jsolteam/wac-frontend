import type {ReactNode} from "react";
import * as Styles from "./Caption.styles";

interface CaptionProps {
    children: ReactNode;
}

export const Caption = ({
                            children
                        }: CaptionProps) => (
    <Styles.Caption>
        {children}
        <Styles.CaptionArrow>&#9660;</Styles.CaptionArrow>
    </Styles.Caption>
);
