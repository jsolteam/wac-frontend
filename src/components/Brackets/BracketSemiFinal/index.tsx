import * as Styles from "./BracketSemiFinal.styles.ts";
import {BracketGroupStage} from "../BracketGroupStage";
import type {ReactElement} from "react";
import type {BracketGroup} from "../BracketGroup";

interface BracketSemiFinalProps {
    top: ReactElement<typeof BracketGroupStage>;
    middle: ReactElement<typeof BracketGroup>;
    bottom: ReactElement<typeof BracketGroupStage>;
}

export const BracketSemiFinal = ({top, middle, bottom}: BracketSemiFinalProps) => {
    return (
        <Styles.BracketSemiFinal>
            <Styles.CurrentStage>
                <Styles.TopLine />
                {top}
                {bottom}
                <Styles.BottomLine />
            </Styles.CurrentStage>


            <Styles.NextStage>
                {middle}
            </Styles.NextStage>
        </Styles.BracketSemiFinal>
    );
};