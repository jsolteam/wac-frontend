import type {ReactNode} from "react";
import * as Styles from "./TitleSection.styles.ts";

interface TitleSectionProps {
    children: ReactNode;
}

export const TitleSection = ({children}: TitleSectionProps) => {
    return (
        <Styles.TitleSection>{children}</Styles.TitleSection>
    );
};