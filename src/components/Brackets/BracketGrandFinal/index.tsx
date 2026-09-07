import * as Styles from "./BracketGrandFinal.styles.ts";
import type {ReactElement} from "react";
import type {BracketFinal} from "../BracketFinal";
import type {BracketGroup} from "../BracketGroup";

interface BracketGrandFinalProps {
    left: ReactElement<typeof BracketFinal>;
    right: ReactElement<typeof BracketGroup>;
}

export const BracketGrandFinal = ({left, right}: BracketGrandFinalProps) => {
    return (
        <Styles.BracketGrandFinal>
            <Styles.CurrentStage>
                {left}
            </Styles.CurrentStage>
            <Styles.NextStage>
                {right}
            </Styles.NextStage>
        </Styles.BracketGrandFinal>
    );
};