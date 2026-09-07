import * as Styles from "./BracketLoseSemiFinal.styles.ts";
import {BracketGroup} from "../BracketGroup";
import {BracketLoseRound4} from "../BracketLoseRound4";
import type {ReactElement} from "react";

interface BracketLoseSemiFinalProps {
    left: ReactElement<typeof BracketLoseRound4>;
    right: ReactElement<typeof BracketGroup>;
}

export const BracketLoseSemiFinal = ({left, right}: BracketLoseSemiFinalProps) => {
    return (
        <Styles.BracketLoseSemiFinal>
            <Styles.Left>
                {left}
            </Styles.Left>
            <Styles.Right>
                {right}
            </Styles.Right>
        </Styles.BracketLoseSemiFinal>
    );
};