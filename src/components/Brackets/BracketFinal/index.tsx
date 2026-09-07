import * as Styles from "./BracketFinal.styles.ts";
import type {ReactElement} from "react";
import type {BracketSemiFinal} from "../BracketSemiFinal";
import type {BracketGroup} from "../BracketGroup";

interface BracketFinalProps {
    top: ReactElement<typeof BracketSemiFinal>;
    middle: ReactElement<typeof BracketGroup>;
    bottom: ReactElement<typeof BracketSemiFinal>;
}

export const BracketFinal = ({top, middle, bottom}: BracketFinalProps) => {
    return (
        <Styles.BracketFinal>
            <Styles.CurrentStage>
                <Styles.TopLine />
                {top}
                {bottom}
                <Styles.BottomLine />
            </Styles.CurrentStage>
            <Styles.NextStage>
                {middle}
            </Styles.NextStage>
        </Styles.BracketFinal>
    );
};