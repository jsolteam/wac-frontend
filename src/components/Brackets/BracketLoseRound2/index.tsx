import * as Styles from "./BracketLoseRound2.styles.ts";
import {BracketGroup} from "../BracketGroup";
import type {ReactElement} from "react";

interface BracketLoseRound2Props {
    top: [ReactElement<typeof BracketGroup>, ReactElement<typeof BracketGroup>];
    bottom: [ReactElement<typeof BracketGroup>, ReactElement<typeof BracketGroup>];
}

export const BracketLoseRound2 = ({top, bottom}: BracketLoseRound2Props) => {
    return (
        <Styles.BracketLoseRound2>
            <Styles.Top>
                {top}
            </Styles.Top>
            <Styles.TopLine />
            <Styles.BottomLine />
            <Styles.Bottom>
                {bottom}
            </Styles.Bottom>
        </Styles.BracketLoseRound2>
    );
};