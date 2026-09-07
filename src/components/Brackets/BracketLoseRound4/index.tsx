import * as Styles from "./BracketLoseRound4.styles.ts";
import {BracketLoseRound2} from "../BracketLoseRound2";
import type {ReactElement, ReactNode} from "react";

interface BracketLoseRound4Props {
    left: ReactElement<typeof BracketLoseRound2>;
    leftBlock: ReactNode;
    right: ReactElement<typeof BracketLoseRound2>;
    rightBlock: ReactNode;
}

export const BracketLoseRound4 = ({left, leftBlock, right, rightBlock}: BracketLoseRound4Props) => {
    return (
        <Styles.BracketLoseRound4>
            <Styles.Top>
                {left}
                {leftBlock}
            </Styles.Top>
            <Styles.TopLine />
            <Styles.Bottom>
                {right}
                {rightBlock}
            </Styles.Bottom>
        </Styles.BracketLoseRound4>
    );
};